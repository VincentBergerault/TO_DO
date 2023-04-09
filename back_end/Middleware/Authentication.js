const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.COOKIE_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;

  const match = await bcrypt.compare(process.env.USER_PWD, password);

  if (email !== process.env.USER_EMAIL || !match) {
    console.log("Invalid email or password.");
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  } else {
    const TODO_AUTHENT = jwt.sign({ email }, secretKey, { expiresIn: "1h" });

    res.cookie("TODO_AUTHENT", TODO_AUTHENT, {
      maxAge: 900000,
      httpOnly: true,
    });

    console.log("Login successful");
    // If the login is successful, return a success response
    return res.json({
      success: true,
      message: "Login successful",
      token: TODO_AUTHENT,
    });
  }
};

const isAuthenticated = (req, res, next) => {
  let cookieIndex = req.rawHeaders.findIndex((element) => element === "Cookie");
  let TODO_AUTHENT = "";
  try {
    TODO_AUTHENT = req.rawHeaders[cookieIndex + 1].split("=")[1];
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  if (!TODO_AUTHENT) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(TODO_AUTHENT, process.env.COOKIE_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = {
  login,
  isAuthenticated,
};
