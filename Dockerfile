FROM node:18-alpine

WORKDIR /frontend

COPY package*.json ./

ENV API_URL=$API_URL
ENV API_TOKEN=$API_TOKEN
ENV APP_DOMAIN=$APP_DOMAIN

RUN npm install

COPY . .

EXPOSE 3000

RUN [ "npm", "run", "build" ]
CMD [ "node", ".next/standalone/server.js" ]