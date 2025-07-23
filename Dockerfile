# Usa uma imagem oficial que já vem com PHP 8.2 e servidor Apache
FROM php:8.2-apache

# Copia todos os arquivos do seu projeto para a pasta pública do servidor web
COPY . /var/www/html/