# https://github.com/BretFisher/node-docker-good-defaults/blob/69c923bc646bc96003e9ada55d1ec5ca943a1b19/Dockerfile
FROM node:14
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9230
RUN mkdir /home/node/app
WORKDIR ./home/node/app
RUN chown node:users ./
RUN groupmod -g 1000 node && usermod -u 1000 -g 1000 node
USER node
COPY package.json package-lock.json ./
RUN npm install --no-optional && npm cache clean --force
CMD ["npm", "run", "dev"]
