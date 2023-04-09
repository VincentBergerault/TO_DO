const express = require("express");
const cors = require("cors");
var history = require("connect-history-api-fallback");
const cookieParser = require("cookie-parser");
const index = require("./indexDB");
const { login, isAuthenticated } = require("./Middleware/Authentication");
require("dotenv").config();

const itemRoutes = require("./Controllers/Item");
const taskRoutes = require("./Controllers/Task");

const path = __dirname + "/app/views/";

index();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin:
      process.env.VUE_APP_DEV === "true"
        ? ["http://localhost:5010", "http://localhost:8080"]
        : "https://" + process.env.VUE_APP_TODO_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.get("/ping", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.post("/api/login", login);

app.use("/api", isAuthenticated);
app.use("/api", itemRoutes);
app.use("/api", taskRoutes);

app.get("/api/test", (req, res) => {
  console.log("test");
  res.json({ message: "connected" });
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
