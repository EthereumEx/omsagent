#!/bin/sh

# TODO this needs alot of work.
# much of this is to suppress the true return that comes from the geth js console
# and can't be suppressed right now
# add to that write to disk then cat the output handles some odd json parse issue
# that occurs in ruby - lexical error: invalid char in json text  Yajl::ParseError
HOMEDIR=$(dirname $0)
IPCPATH="$HOMEDIR/.ethereum/geth.ipc"
RESULT=$(geth --jspath $HOMEDIR --exec 'loadScript("ethStats.js")' attach ipc:$IPCPATH)
JSON=$(echo $RESULT | cut -d ' ' -f 1)
RV=$(echo $RESULT | cut -d ' ' -f 2)
echo "["$JSON"]" > $HOMEDIR/gethout.json
cat $HOMEDIR/gethout.json
