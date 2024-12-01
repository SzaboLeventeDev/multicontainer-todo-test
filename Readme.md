# Containerized ToDo Application

## Summary
This application was built as part of my portfolio to practise and deepen my containerization knowledge. It includes both client and server side using Vue.JS on the frontend side and Express.JS as backend extended with TS. As database Postgres generated in a container.

### First steps
1. Clone the repository using HTTPS link or SSH.

2. Install node version manager then install the Node version from the .nvmrc file.

## Frontend

### First steps
Navigate to the /client folder in the CLI and install the packages using ``yarn install``.

## Backend

### First steps
Navigate to the /srv folder in the CLI and install the packages using ``yarn install``.

### Script blocks
``start:<environment>`` scripts are used to start the application locally based on the selected environment.

``build`` is building the app locally.

``build:<environment>`` scripts are used to build the application to the selected environment.

``docker:<environment>:<app>`` scripts are used to run the compose file of the selected application. There are separate compose files for each apps.

## Deploy
TODO