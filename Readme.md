# Containerized ToDo Application

## Summary
This application was built as part of my portfolio to practise and deepen my containerization knowledge. It includes both client and server side using Vue.JS on the frontend side and Express.JS as backend extended with TS. As database Postgres generated in a container.

The app has two main pages, one for adding new task and the other to list the existing tasks.

### First steps
1. Clone the repository using HTTPS link or SSH.

2. Install node version manager then install the Node version from the .nvmrc file.

3. Install docker if it is not on your computer yet.

## Frontend

### First steps
Navigate to the /client folder in the CLI and install the packages using ``yarn install``.

### Script blocks
``build`` is building the app locally.

``build:<environment>`` scripts are used to build the application to the selected environment.

``docker:<environment>`` scripts are used to run the compose file of the selected application.
## Backend

### First steps
Navigate to the /srv folder in the CLI and install the packages using ``yarn install``.

Create a postgres container using the compose file in the docker/db folder. Run ``yarn docker:<environment>:db`` to compose a new database. After the script has finished successfully, run ``yarn migration`` to create the actual table structure. If you need data initialization, run ``yarn migration:data`` too.

### Script blocks
``start:<environment>`` scripts are used to start the application locally based on the selected environment.

``build`` is building the app locally.

``build:<environment>`` scripts are used to build the application to the selected environment.

``docker:<environment>:<app>`` scripts are used to run the compose file of the selected application. There are separate compose files for each apps.

## Deploy
TODO