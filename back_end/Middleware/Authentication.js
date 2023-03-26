const login = async (req, res) => {
  const { email, password } = req.body;
  if (email !== process.env.USER_EMAIL && password !== process.env.USER_PWD) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  } else {
    req.session.user = {
      authenticated: true,
      username: req.body.username,
    };
    // If the login is successful, return a success response
    return res.json({ success: true });
  }
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
  isAuthenticated,
};
