#!/bin/bash

# criar 10 diretórios com nome padrão dir<n>, 
# onde n é o número a ser adicionado ao nome do diretório.

# criar 05 arquivos com o nome padrão file<m>,
# onde m é o número a ser adicionado.

DIR=dir 
FILE=file 

for i in $(seq 1 10)
do 
    d="$DIR$i"
    mkdir "$d"
    for j in $(seq 1 5)   # $(seq 1 $1) -- até onde você coloca no terminal depois de chamar)
    do 
       f="$FILES$j"
       touch "$d/$f"
    done 
done 