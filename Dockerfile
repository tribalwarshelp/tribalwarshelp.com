FROM node:14.16.1-alpine as build-deps

ENV NODE_ENV=production

RUN apk --no-cache add shadow \
    gcc \
    musl-dev \
    autoconf \
    automake \
    make \
    libtool \
    nasm \
    tiff \
    jpeg \
    zlib \
    zlib-dev \
    file \
    pkgconf
RUN npm install --global gatsby-cli@3.3.0
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

#Stage 2

FROM nginx:1.20-alpine
COPY --from=build-deps /usr/src/app/public /var/www
COPY default.conf /etc/nginx/templates/default.conf.template
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
