FROM momar/web

ENV ENABLE_COMPRESSION=1
ENV ENABLE_INDEX=1

COPY toolkit/stylesheet/codeberg-design.css \
     toolkit/stylesheet/halfmoon.css \
     toolkit/stylesheet/halfmoon.min.js \
     toolkit/stylesheet/index.html \
     /var/www/

COPY logo-kit/svg/* logo-kit/png/* /var/www/logo/
