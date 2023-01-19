FROM node:16-alpine
WORKDIR /build
COPY package.json yarn.lock ./
COPY patches patches/
RUN yarn add patch-package postinstall-postinstall
RUN yarn install
COPY . .

ENV NODE_ENV=production
CMD yarn build
