const User = require("../models/user.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

exports.signUp = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    const result = await newUser.save();
    res.json("User added!");
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.signIn = async (req, res) => {
  const { login, password } = req.body;

  try {
    const result = await User.findOne({
      login,
      password
    });
    res.json(result);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
