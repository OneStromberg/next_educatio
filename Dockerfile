FROM node:18-alpine

WORKDIR /frontend

COPY package*.json ./

ARG API_URL
ARG API_TOKEN
ARG APP_DOMAIN

RUN npm install

COPY . .

EXPOSE 3000

RUN [ "npm", "run", "build" ]
CMD [ "node", ".next/standalone/server.js" ]
