#!/usr/bin/env bash

sed -i '/^\$\$/d' $1
sed -i -e 's/"//g' $1

node dist/main.js $@
