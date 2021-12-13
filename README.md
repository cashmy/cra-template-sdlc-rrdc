# cra-template-sdlc-rrdc

## Software Development Life Cycle for React with RTK, Router, Docker, and Cypress 

To use this template, in your command prompt type:

`npx create-react-app my-app --template sdlc-rrdc`

Docker build image files for both development and production are included
and can be ignored if Docker is not installed.
The compose files will need to be modified in order to reflect your app name.

It presently uses:

 Servers:
 -  Node v16+ (for dev)
 -  Ngnx: stable-alpine (for prod in the Docker container)

 Application:
 -  React v17.0.2
 -  React-Router-Dom v17.0.2
 -  Redux Toolkit v1.5.1
 -  Cypress v9.1.1
 -  (Jest is also included) v4.2.4
