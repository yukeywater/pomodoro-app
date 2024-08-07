FROM httpd:latest
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./styles.css /usr/local/apache2/htdocs/
COPY ./script.js /usr/local/apache2/htdocs/
