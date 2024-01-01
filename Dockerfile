FROM node:16-alpine
WORKDIR /build
COPY yarn.lock ./
RUN yarn install
COPY . .

ENV NODE_ENV=production
CMD yarn build
