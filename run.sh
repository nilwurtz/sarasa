#!/bin/bash

current=`dirname $0`
cd `dirname $0`

if [ ! -d $current/dist ]; then
    mkdir $current/dist
fi

if [ ! -f $current/dist/main.js ]; then
    npm run build
fi

./clip.sh $1

node dist/main.js $@
