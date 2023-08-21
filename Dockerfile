FROM node:18-alpine

WORKDIR /frontend
ENV NODE_ENV="production"

COPY package*.json ./

ARG API_URL
ARG API_TOKEN
ARG APP_DOMAIN

RUN npm install
COPY . .
RUN [ "npm", "run", "build" ]

COPY ./public ./public
COPY ./.next/standalone ./
COPY ./.next/static ./.next/static

EXPOSE 3000


CMD [ "node", "./server.js" ]
