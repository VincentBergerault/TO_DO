const express = require("express");
const index = require("./indexDB");
const { /* authMiddleware, */ login } = require("./Middleware/Authentication");
require("dotenv").config();

const itemRoutes = require("./Controllers/Item");
const taskRoutes = require("./Controllers/Task");

index();

const app = express();

app.use(express.json());
app.post("/login", login);

// Apply the authentication middleware to all routes except /login
// app.use(authMiddleware);

// This endpoint will only be accessible if the request has a valid JWT
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!", user: req.user });
});

app.use(itemRoutes);
app.use(taskRoutes);

app.listen(process.env.BACK_END_PORT, () => {
  console.log(
    `Server started on http://localhost:${process.env.BACK_END_PORT}`
  );
});
