const jwt = require('jsonwebtoken');

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

const login = (req, res) => {
  // Get the user's credentials from the request body
  const { username, password } = req.body;

  // Authenticate the user's credentials
  if (username === 'user' && password === 'password') {
    // If the credentials are valid, generate a JWT
    const token = jwt.sign({ user: username }, SECRET_KEY);
    return res.json({ token });
  }

  // If the credentials are invalid, return a 401 error
  return res.status(401).json({ error: 'Unauthorized' });
};

module.exports = {
  authMiddleware,
  login,
};
