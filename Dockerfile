FROM node:alpine3.15

WORKDIR /app

COPY package.json /app 

COPY . /app

RUN yarn 

CMD ["yarn", "start"]

