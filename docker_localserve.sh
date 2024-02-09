#!/bin/bash

docker run --rm -it -v ./website:/usr/share/nginx/html -v ./nginx.conf:/etc/nginx/conf.d/default.conf -p 8080:80 nginx:latest