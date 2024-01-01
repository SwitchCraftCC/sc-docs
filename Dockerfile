FROM node:18-alpine

RUN apk add git ca-certificates

WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

ENV NODE_ENV=production
CMD yarn build
