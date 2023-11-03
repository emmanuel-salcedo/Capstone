
# Node.js POST and GET Dashboard

This project sets up a basic Node.js server that serves a dashboard page where users can make POST and GET requests to specified endpoints. The responses from these requests are displayed on the dashboard under the respective buttons.

## Project Structure

```
my-node-project/
|-- node_modules/
|-- public/
|   |-- index.html
|   `-- script.js
|-- package.json
`-- server.js
```

### `server.js`

This is the entry point of the Node.js server which serves the static files and sets up the server to listen on port 3000.

### `public/index.html`

This file contains the HTML for the dashboard, including buttons to trigger the POST and GET requests.

### `public/script.js`

This JavaScript file includes the client-side logic to perform POST and GET requests and display the results in the browser.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/emmanuel-salcedo/Capstone/
   ```
2. Navigate to the project directory:
   ```
   cd Capstone
   ```
3. Install the necessary dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. The server will start at `http://localhost:3000`. Open this URL in your web browser to view and interact with the dashboard.

## Usage

Once the server is running and the dashboard is opened in a web browser:

- Click the **Make POST Request** button to send a POST request to the configured endpoint.
- Click the **Make GET Request** button to send a GET request to the configured endpoint.
- The responses from these requests will be displayed under the respective buttons on the dashboard.
