#!/bin/bash

sed -i '/^\$\$/d' $1
sed -i -e 's/"//g' $1