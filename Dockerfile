### STAGE 1: Build ###

FROM node:10-alpine as builder

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy npm package files
COPY package*.json ./

# Install npm dependencies
RUN npm set progress=false && npm i --silent

# Copy app files to out container
COPY . .

# Build app
RUN ./node_modules/.bin/gatsby build

### STAGE 2: Setup ###

FROM nginx:1.12-alpine

# Copy build files from first image to nginx dir
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/public/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]