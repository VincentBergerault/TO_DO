const jwt = require("jsonwebtoken");

/*
const SECRET_KEY = 'secret_key';

const authMiddleware = (req, res, next) => {
  // Get the token from the headers
  const token = req.headers.authorization;

  // If there's no token, return a 401 error
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the token
  // eslint-disable-next-line consistent-return
  jwt.verify(token, SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decoded.user;
    next();
  });
};

*/
const login = async (req, res) => {
  const { email, password } = req.body;

  // Find the user with the specified email address
  const user = await User.findOne({ email });

  if (!user) {
    // If the user is not found, return an error response
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  }

  // Compare the user's password with the hashed password stored in the database
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    // If the passwords don't match, return an error response
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  }

  // If the login is successful, return a success response
  return res.json({ success: true });
};

module.exports = {
  //authMiddleware,
  login,
};
