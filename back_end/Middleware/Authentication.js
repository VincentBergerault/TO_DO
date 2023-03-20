const login = async (req, res) => {
  const { email, password } = req.body;

  //const user = await User.findOne({ email });

  /*
  if (!user) {
    // If the user is not found, return an error response
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  }*/

  // const isMatch = await bcrypt.compare(password, user.password);
  /*if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  }
  */
  if (email !== process.env.TEMP_EMAIL && password !== process.env.TEMP_PWD) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email or password." });
  }
  // If the login is successful, return a success response
  return res.json({ success: true });
};

module.exports = {
  login,
};
