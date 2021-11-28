FROM node:16.13

RUN mkdir /data
WORKDIR /data

COPY . /data
RUN npm install

CMD npm run start
