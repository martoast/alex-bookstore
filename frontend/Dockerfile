FROM node:alpine

RUN mkdir -p /var/www

WORKDIR /var/www

COPY . /var/www

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=3000

# start the app
ENTRYPOINT ["sh", "/var/www/entrypoint.sh" ]