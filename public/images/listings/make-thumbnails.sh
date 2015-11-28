#!/usr/bin/env bash

rm thumbnails/*
ls *.jpg | xargs -I {}  convert {}  -resize 200x200^ -gravity Center -crop 200x200+0+0 +repage thumbnails/{}