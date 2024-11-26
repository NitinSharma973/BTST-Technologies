require("dotenv").config();
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/api/tasks", taskRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
