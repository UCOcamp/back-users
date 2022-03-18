.PHONY: build rebuild dev sdev

SHELL=/bin/zsh
include .env
export

build:
		@docker-compose build
		@echo -e "\n"
		@echo -e "User's microservice was built. Use make dev to start programming"

rebuild:
		@docker-compose down
		@docker-compose up -d --build
		@echo -e "\n"
		@echo -e "User's microservice was built. Use make dev to start programming"

dev:
		@docker-compose up -d
		@echo -e "\n"
		@echo -e "\e[1;42m[DEV]\e[0m User's microservice is UP. localhost:${PORT}"

sdev:
		@docker-compose stop
		@echo -e "\n"
		@echo -e "\e[1;42m[DEV]\e[0m User's microservice STOPPED."