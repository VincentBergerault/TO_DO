const express = require("express");
const cors = require("cors");
var history = require("connect-history-api-fallback");
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

const path = __dirname + "/app/views/";

index();

const app = express();
app.use(express.json());

app.use(
  cookieSession({
    name: "TODO_AUTH",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(
  cors({
    origin:
      process.env.VUE_APP_DEV === "true"
        ? "http://localhost:5010"
        : "https://" + process.env.VUE_APP_TODO_BACKEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.get("/ping", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.post("/api/login", login);
app.get("/api/logout", logout);

app.use("/api", itemRoutes, isAuthenticated);
app.use("/api", taskRoutes, isAuthenticated);

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use(history());
app.use(express.static(path));
app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.listen(process.env.BACK_END_PORT, () => {
  console.log(
    `Server started on http://localhost:${process.env.BACK_END_PORT}`
  );
});
