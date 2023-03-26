const express = require("express");
const cors = require("cors");
const index = require("./indexDB");
const { login, isAuthenticated } = require("./Middleware/Authentication");
require("dotenv").config();

const itemRoutes = require("./Controllers/Item");
const taskRoutes = require("./Controllers/Task");

const cookieSession = require("cookie-session");

index();

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    name: "sessionCookieToDo",
    keys: [process.env.COOKIE_KEY],
    cookie: {
      secure: true,
      httpOnly: true,
      maxAge: 60000, // set the session expiration time (in milliseconds)
    },
  })
);
app.use("/api", isAuthenticated);

// This endpoint will only be accessible if the request has a valid JWT
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/login", login);
app.use("/api", itemRoutes);
app.use("/api", taskRoutes);

app.listen(process.env.BACK_END_PORT, () => {
  console.log(
    `Server started on http://localhost:${process.env.BACK_END_PORT}`
  );
});
