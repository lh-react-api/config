NAME=name
VERSION=1.0

init:
	docker-compose build && \
	docker-compose up -d && \
	docker-compose exec sg_server bash -c "systemctl start nginx && systemctl enable nginx" && \
	docker-compose exec sg_php bash -c "composer install && cp .env.local .env && php artisan migrate --seed"

start:
	docker-compose start  && \
    docker-compose exec sg_server bash -c "systemctl start nginx && systemctl enable nginx"

up:
	docker-compose up -d && \
    docker-compose exec sg_server bash -c "systemctl start nginx && systemctl enable nginx"

restart:
	docker-compose restart

stop:
	docker-compose stop

down:
	docker-compose down

logs:
	docker-compose logs

ps:
	docker-compose ps

login-php:
	docker-compose exec php bash

login-mysql:
	docker-compose exec sg_mysql bash -c "mysql -u user -p"

login-server:
	docker-compose exec sg_server bash

generate-type:
	docker-compose up sg_swagger_openapi2aspida

generate-type2:
	docker-compose up openapi-generator-server
rms:
	docker rm sg_swagger_openapi2aspida && docker rmi config-sg_swagger_openapi2aspida
