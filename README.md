# Campaign Companion Backend

### QuickStart

1. Install Docker
1. Run `make` to get containers and set up dependencies.
1. Run `docker-compose up` to run locally.
1. Run `make seed` to insert seed data.
1. Point your browser to http://localhost:8080/


### Make Targets

#### `make` 

The 'all' target. Installs dependencies, builds the distribution container, and performs the steps necessary for development or running tests.

#### `make clean` 

Removes build files and 3rd party dependencies.

#### `make test` 

Runs the node.js unit test inside the docker container.

#### `make docker_build` 

Builds the docker container for distribution and use in the docker-compose network.

#### `make build`

Installs dependencies.

#### `make seed`

Insert the seed data. Only do this once as it's not guaranteed to be idempotent.

#### `make shell`

Creates a bash shell inside a docker container for debugging or more advanced script running.
