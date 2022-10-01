FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get -y install tzdata
RUN apt-get install python3.10 -y
RUN python3 --version
RUN apt-get install python3-pip -y
RUN pip3 install --upgrade pip

RUN apt-get install -y --no-install-recommends software-properties-common && \
  apt-get install -y --no-install-recommends \
        make \
        automake \
        libpq-dev \
        libffi-dev \
        gfortran \
        g++ \
        git \
        libboost-program-options-dev \
        libtool \
        libxrender1 \
        wget \
        ca-certificates \
        curl && \
  apt-get clean -y && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY . .
RUN pip3 install torch===1.12.1+cpu -f https://download.pytorch.org/whl/torch_stable.html
RUN pip3 install --no-cache-dir -r requirements.txt

CMD [ "python", "./main.py" ]