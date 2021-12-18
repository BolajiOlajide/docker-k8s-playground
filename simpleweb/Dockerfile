FROM node:alpine

WORKDIR /usr/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

CMD ["npm", "start"]