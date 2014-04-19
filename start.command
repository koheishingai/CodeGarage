#! /bin/bash
cd `dirname $0`
find $PWD -name a.sh #=> found always!
cd nodeserver
node app
