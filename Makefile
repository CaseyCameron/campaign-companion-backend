VERSION ?= latest
CURRENT_DIR ?= $(shell pwd)
HOST_UID ?= 1000
HOST_GID ?= 1000
DOCKER_FLAGS ?=
PROJECT_NAME = 'campaign-companion-api'
DOCKER_RUN = docker run ${DOCKER_FLAGS} -t --rm \
	--env="HOST_UID=${HOST_UID}" \
	--user=${HOST_UID}:${HOST_GID} \
	--workdir=/data \
	-v ${CURRENT_DIR}:/data \
	node:16.13

.PHONY: all
all: docker_build build
	@echo "Build complete."

.PHONY: test
test:
	${DOCKER_RUN} LOG_LEVEL=error npm test

.PHONY: clean
clean: 
	rm -rf version.txt
	rm -rf node_modules
	@echo "Done."

.PHONY: docker_build
docker_build: 
	docker build --tag $(PROJECT_NAME):$(VERSION) .

.PHONY: docker_push
docker_push: 
	docker push $(PROJECT_NAME):devel
	docker push $(PROJECT_NAME):$(VERSION)

.PHONY: migrate
migrate:
	docker-compose up migrations
	
.PHONY: rollback
rollback:
	${DOCKER_RUN} npm run rollback

.PHONY: dev
dev: 
	${DOCKER_RUN} npm run dev

.PHONY: build
build: 
	git rev-parse --short HEAD > version.txt
	${DOCKER_RUN} npm install

.PHONY: shell
shell:
	$(eval DOCKER_FLAGS := -ti )
	${DOCKER_RUN} bash

