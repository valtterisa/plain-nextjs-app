FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV PORT=8080

ENTRYPOINT ["node","docker-entrypoint.js"]
CMD ["npm", "run", "dev"]

