# SocketIO Node Example

This repository contains a basic implementation of Socket.IO in Node.js. It includes a client and a server that communicate with each other using WebSocket events.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Socket.IO](https://socket.io/)

## Project Structure

```
SocketIO_Node/
├── client.js        # Socket.IO client code
├── server.js        # Socket.IO server code
├── package.json     # Node.js project configuration
└── README.md        # Project documentation
```

## Requirements

- Node.js installed on your system

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anggeloo/SocketIO_Node.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SocketIO_Node
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Run the Server

1. Start the Socket.IO server:

   ```bash
   node server.js
   ```

2. The server will be running on port `3000`.

### Run the Client

1. In another terminal, run the client:

   ```bash
   node client.js
   ```

2. The client will connect to the server, and messages will be exchanged.

## Expected Behavior

1. When the client connects to the server, a connection message is displayed on both the server and the client.
2. The client sends a message to the server using the `message` event.
3. The server responds to the client using the `response` event.
4. Both sides log the sent and received messages to the console.

## Example Output

### Server:

```bash
🚀 Socket.IO server running on port 3000
🟢 Client connected: some-socket-id
📩 Message received: Hello from the client!
🔴 Client disconnected: some-socket-id
```

### Client:

```bash
🟢 Connected to the server with ID: some-socket-id
📩 Server response: Hello from the server! I received your message: Hello from the client!
🔴 Disconnected from the server
```
