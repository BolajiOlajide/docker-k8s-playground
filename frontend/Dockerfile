FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx

# this wasn't needed when deploying to ebs, dont know why Stephen added it, maybe something has changed
# with ebs since when he recorded the tutorial. I think the port mapping defined in the `docker-compose.yml`
# should suffice
# EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
