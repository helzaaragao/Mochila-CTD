#!/bin/bash 

cat lista-ips.txt | while read output 

do 

    ping -c 1 "$output" > /dev/null
    if [ $? -eoq ]; then 
     
     echo "node $output is up" 
else 
     echo "node $echoput is up"
     fi 
done 

