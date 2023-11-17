# PetConnect Server

This is the frontend (client) component of a full-stack application with a monorepo structure. It is built using Reactjs for UI components, Redux for state management and chakra-ui for styling.

## Project Structure

The frontend project follows a modular structure to organize different components and features. Here is an overview of the project structure:

- `public`: publicly available assets like logo.
- `src`: Contains the source code of the server.

  - `main.tsx`: Entry point of the client app.
  - `app.tsx`: renders the whole app.
  - `layout.tsx`: contains the Root layout for the Application.
  - `assets`: contains static assets like images,fonts..
  - `components`: contains reusable components
    - `shared`: contains shares components all accross the app.
    - `chat`: contains all the reusable components to render chat screen.
    - `pet`: contains all the reusable components to render pet screen.
    - `Routes`: contains manager for routes and route gaurd to implement client side authentication.
    - `skeletons`: contains loading screens.
  - `configs`: contains configuration files for apis.
  - `hooks`: contains hooks which used frequently.
  - `pages`: contains pages or screens of the app.
  - `services`: contains application services like state management etc..
    - `redux`: contains store and slices for managing state.
    - `websocket`: contains implementation logic for websocket connections.
  - `utils`: contains utility functions
    - `helpers`: contains helper functions.
    - `types`: contains all the types.

## Tools and Technologies Used

- **Typescript:** A statically typed superset of JavaScript, bringing enhanced type-checking and tooling support to the PetConnect project.

- **React js:** A JavaScript library to build reusable ui components.

- **Redux:** A flexible and global state management tool.

- **React-router-dom:** A javascript library to implement client side navigation.

- **chakra-ui** A javascript Ui component library and css-in-js solution.

- **Socket.io-client:** Used Socket.io-client to establish real time communication.

- **Docker:** (optional) Containerization for easy deployment.

