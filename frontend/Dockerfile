FROM node:alpine

WORKDIR /frontend
COPY ./package.json /frontend
COPY ./package-lock.json /frontend
COPY . /frontend

RUN npm install

RUN npm run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "start"]