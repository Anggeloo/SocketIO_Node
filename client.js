const io = require("socket.io-client");

// Connect to the server
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("🟢 Connected to the server with ID:", socket.id);

  // Send a message to the server
  socket.emit("message", "Hello from the client!");

  // Listen for the server's response
  socket.on("response", (msg) => {
    console.log("📩 Server response:", msg);
  });
});

socket.on("disconnect", () => {
  console.log("🔴 Disconnected from the server");
});
