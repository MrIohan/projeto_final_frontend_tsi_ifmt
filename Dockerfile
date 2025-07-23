# Usa a imagem oficial que já vem com PHP 8.2 e servidor Apache
FROM php:8.2-apache

# Habilita o módulo de reescrita de URLs
RUN a2enmod rewrite

# IMPORTANTE: Altera a configuração do Apache para permitir que o .htaccess funcione
# Ele procura por "AllowOverride None" e substitui por "AllowOverride All"
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# Copia todos os arquivos do seu projeto para a pasta pública do servidor web
COPY . /var/www/html/