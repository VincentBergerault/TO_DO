const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;

  const match = await bcrypt.compare(process.env.USER_PWD, password);
  console.log(match);
  if (email !== process.env.USER_EMAIL || !match) {
    console.log("Invalid email or password.");
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  } else {
    req.session.user = {
      authenticated: true,
      email: req.body.email,
    };
    console.log("Login successful");
    // If the login is successful, return a success response
    return res.json({ success: true, message: "Login successful" });
  }
};

const logout = async (req, res) => {
  req.session = null;
  res.clearCookie("TODO_AUTHENT");
  res.sendStatus(200);
};

function isAuthenticated(req, res, next) {
  if (req.session.user && req.session.user.authenticated) {
    // the user is authenticated, so continue with the request
    return next();
  } else {
    // the user is not authenticated, so redirect to the login page
    res.status(401).send({ error: "Unauthenticated" });
  }
}

module.exports = {
  login,
  logout,
  isAuthenticated,
};
