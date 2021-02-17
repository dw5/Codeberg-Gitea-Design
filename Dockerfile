FROM momar/web

ENV ENABLE_COMPRESSION=1
ENV ENABLE_INDEX=1

COPY toolkit/stylesheet/codeberg-design.css /var/www/
COPY toolkit/stylesheet/halfmoon.css /var/www/
COPY toolkit/stylesheet/halfmoon.min.js /var/www/

COPY logo-kit/svg /var/www/logo
COPY logo-kit/png/* /var/www/logo/
