/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Typography
    { pattern: /^font-(sans|serif|mono|thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/ },
    { pattern: /^text-(left|center|right|justify)$/ },
    { pattern: /^text-(\w+)(-\d{3})?$/ }, // text colors
    { pattern: /^leading-(none|tight|snug|normal|relaxed|loose|\d+)$/ },
    { pattern: /^tracking-(tighter|tight|normal|wide|wider|widest)$/ },

    // Margin & Padding
    { pattern: /^m[trblxy]?-\d+$/ },
    { pattern: /^p[trblxy]?-\d+$/ },

    // Background colors
    { pattern: /^bg-(\w+)(-\d{3})?$/ },

    // Border
    { pattern: /^border(-(t|r|b|l|x|y))?(-\d+)?$/ },
    { pattern: /^border-(\w+)(-\d{3})?$/ }, // border colors
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/ },
    { pattern: /^border-(solid|dashed|dotted|double|none)$/ },

    // Opacity
    { pattern: /^opacity-\d+$/ },

    // Shadow
    { pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
