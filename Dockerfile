### Stage 1: Build angular ###
FROM node:12-alpine AS build

### Prepare ARG ###
ARG API_URL

### Build
WORKDIR /build
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build -- --env.API_URL=$API_URL

### Stage 2: Run with nginx ###
FROM nginx:1.16-alpine
COPY --from=build /build/target/classes/static /usr/share/nginx/html
