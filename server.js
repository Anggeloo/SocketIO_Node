const { Server } = require("socket.io");

// Create a server instance on port 3000
const io = new Server(3000, {
  cors: {
    origin: "*", // Allow connections from any origin
  },
});

console.log("🚀 Socket.IO server running on port 3000");

// Handle client connections
io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);

  // Listen for events from the client
  socket.on("message", (msg) => {
    console.log(`📩 Message received: ${msg}`);
    // Respond to the client
    socket.emit("response", `Hello from the server! I received your message: ${msg}`);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});
