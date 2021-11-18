FROM node

RUN mkdir /data
WORKDIR /data

COPY . /data
RUN npm install

CMD npm run start
