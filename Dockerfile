FROM node:14.16.1-alpine as build-deps

ENV NODE_ENV=production

RUN npm install --global gatsby-cli
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

#Stage 2

FROM nginx:1.20-alpine
COPY --from=build-deps /usr/src/app/public /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
