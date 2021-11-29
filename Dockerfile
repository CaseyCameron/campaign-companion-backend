FROM node:16.13-bullseye

USER root
RUN apt-get update && apt-get install -y default-mysql-client

RUN mkdir /data
WORKDIR /data

COPY . /data
RUN npm install

CMD npm run start
