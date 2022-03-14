FROM python:3.6

RUN mkdir -p /home/python/app 
# && chown -R python:python /home/python/app

WORKDIR /home/python/app

COPY requirement.txt ./

USER root

RUN pip install -r requirement.txt

COPY . .