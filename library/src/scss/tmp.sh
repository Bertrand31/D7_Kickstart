#!/bin/bash

for file in $(find ./ -name "*.sass");
do
    n="$(echo $file | sed 's/^\(.*\).scss$/\1.sass/')";
    sass-convert $file $n;
    rm $file;
done
