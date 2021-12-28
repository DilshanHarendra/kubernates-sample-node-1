FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
