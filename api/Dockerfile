FROM golang:1.19

RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go mod download

RUN go build -o main .

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

EXPOSE 8080

CMD ["/app/main"]
