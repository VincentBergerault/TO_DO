const express = require("express");
const cors = require("cors");
const index = require("./indexDB");
const {
  login,
  logout,
  isAuthenticated,
} = require("./Middleware/Authentication");
require("dotenv").config();

const itemRoutes = require("./Controllers/Item");
const taskRoutes = require("./Controllers/Task");
const cookieSession = require("cookie-session");

index();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.DEV === "true"
        ? "http://localhost:8080"
        : process.env.TODO_FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "TODO_AUTH",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use("/api", isAuthenticated);

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.post("/login", login);
app.get("/logout", logout);

app.use("/api", itemRoutes);
app.use("/api", taskRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(process.env.BACK_END_PORT, () => {
  console.log(
    `Server started on http://localhost:${process.env.BACK_END_PORT}`
  );
});
