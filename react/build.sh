#!/bin/sh
set -ex
filename='build.zip'
git archive --format=zip -o "$filename" master
zip -d "$filename" build.sh
