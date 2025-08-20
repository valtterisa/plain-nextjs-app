FROM node:18-alpine

WORKDIR /app/data

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV PORT=8080


CMD ["npm", "run", "dev"]

