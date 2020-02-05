FROM node:alpine

MAINTAINER Damien Hampton <damien@26brains.com>

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .
CMD npm start