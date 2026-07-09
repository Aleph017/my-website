#!/bin/bash

for file in markdownver/*.md; do
  name=$(basename $file)
  pandoc -c debriefstyle.css $file -so htmlver/${name%.*}.html;
done
