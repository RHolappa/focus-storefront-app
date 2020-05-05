FROM node:10 as build

USER node:node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm install
RUN npm install serve
COPY --chown=node:node . .
RUN npm run build