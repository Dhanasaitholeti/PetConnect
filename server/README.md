# PetConnect Server

This is the backend (server) component of a full-stack application with a monorepo structure. It is built using Node.js and Express and socket.io

## Project Structure

The backend project follows a modular structure to organize different components and features. Here is an overview of the project structure:

- `prisma`: Data models and database schemas
  - `schema.prisma`: contains all the required database models
- `src`: Contains the source code of the server.
  - `index.js`: Entry point of the server.
  - `controllers`: Handles the logic of different routes.
  - `middlewares`: Custom middleware functions.
  - `router`: Defines the API routes.
  - `socket`: handles websocket connection and their logic between client ans server.
  - `utils`: Utility functions and helpers.

## Tools and Technologies Used

- **Typescript:** A statically typed superset of JavaScript, bringing enhanced type-checking and tooling support to the PetConnect project.

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.

- **Express:** A minimal and flexible Node.js web application framework.

- **Database (PostgreSQL):** Choose the database that best fits your project needs.

- **Prisma:** ORM (Object Relational Mapper) library for Postgresql and Node.js.

- **RESTful API Design:** Follows REST principles for designing APIs.

- **Middleware:** Utilizes middleware functions for route handling and error management.

- **Socket.io:** Used Socket.io to establish real time communication.

- **Docker:** (optional) Containerization for easy deployment.
