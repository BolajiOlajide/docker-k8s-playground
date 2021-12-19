FROM node:alpine

WORKDIR /app

COPY package.json package.json

RUN yarn

COPY . .

CMD ["yarn", "start"]