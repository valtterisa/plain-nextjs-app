#!/usr/bin/env node

const { spawn } = require("node:child_process");
const { existsSync } = require("node:fs");
const { promises: fs } = require("node:fs");
const path = require("node:path");
const chokidar = require("chokidar");

const env = { ...process.env };

function exec(command) {
  const child = spawn(command, { shell: true, stdio: "inherit", env });
  return new Promise((resolve, reject) => {
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} failed rc=${code}`))
    );
  });
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function copyFromVolumeToApp() {
  if (existsSync("/app/data")) {
    await exec("cp -r /app/data/. /app/");
  }
}

async function syncFileToVolume(filePath) {
  if (!filePath.startsWith("/app/")) return;
  if (filePath.startsWith("/app/data/")) return;
  if (
    filePath.includes("/node_modules/") ||
    filePath.includes("/.next/") ||
    filePath.includes("/.git/")
  )
    return;
  const rel = path.relative("/app", filePath);
  const dst = path.join("/app/data", rel);
  await ensureDir(path.dirname(dst));
  try {
    await fs.copyFile(filePath, dst);
  } catch {}
}

function startWatcher() {
  const watcher = chokidar.watch("/app", {
    ignored: [/^\/app\/data/, /\/node_modules\//, /\/\.next\//, /\/\.git\//],
    ignoreInitial: true,
    persistent: true,
    depth: 20,
  });
  watcher.on("add", syncFileToVolume);
  watcher.on("change", syncFileToVolume);
  watcher.on("addDir", async (dir) => {
    if (
      dir.startsWith("/app/data") ||
      dir.includes("/node_modules") ||
      dir.includes("/.next") ||
      dir.includes("/.git")
    )
      return;
    const rel = path.relative("/app", dir);
    await ensureDir(path.join("/app/data", rel));
  });
}

(async () => {
  await copyFromVolumeToApp();
  startWatcher();
  await exec(process.argv.slice(2).join(" "));
})();
