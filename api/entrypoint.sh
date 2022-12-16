#!/bin/sh

go mod download

go build -o main .

/app/main