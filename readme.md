
# Node.js Dashboard for HTTP Requests

This project is a Node.js application that features a web-based dashboard to initiate POST and GET requests to an external API. It serves the dashboard through Express and handles HTTP requests with the Axios library.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Built With](#built-with)

## Getting Started

These instructions will guide you in setting up the project and running it on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (Comes with Node.js)

### Installation

Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-project-name>.git
   cd <your-project-name>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

After starting the server, the dashboard should be available at `http://localhost:3000`.

## Usage

With the server running, visit `http://localhost:3000` in your web browser to access the dashboard. Use the interface to send POST and GET requests and view the responses directly within the web page.

## Development

This section guides you through making changes to the project:

- The front-end dashboard files are located within the `public` directory.
- Server configuration and API request handlers can be found in the `index.js` file.

To contribute or customize, simply modify the files and test the changes by refreshing your browser while the server is running.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Axios](https://github.com/axios/axios) - For making HTTP requests
- [Node.js](https://nodejs.org/) - The server environment


