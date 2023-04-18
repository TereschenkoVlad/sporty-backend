FROM --platform=linux/amd64 node:18.16

WORKDIR /var/www/backend

USER root

COPY app /var/www/backend/app
COPY package*.json /var/www/backend/
COPY index.ts /var/www/backend/

RUN npm install
