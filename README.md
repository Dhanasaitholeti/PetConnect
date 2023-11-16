# PetConnect

This is a full-stack application with a monorepo structure. It consists of a ReactJS frontend using Redux for state management and a Node.js backend with Express.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for Docker deployment)

## Getting Started

### Clone the repository:

 ```bash
git clone https://github.com/Dhanasaitholeti/PetConnect.git
 ```

### Manual Installation

#### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

#### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm run dev
   ```

### Using Docker Compose

1. Build and start the containers

   ```bash
   docker-compose up --build
   ```

2. Access the application:

   - `client`: http://localhost:3000
   - `server`: http://localhost:5000

### Project Structure

- `client`: ReactJS frontend with Redux state management
- `server`: Node.js and Express server

### Contributing

    Feel free to contribute by submitting issues or pull requests.

# Thank you ;)
