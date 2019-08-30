const User = require("../models/user.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

exports.getUser = async (id, res) => {
  try {
    const user = await User.findOne({ id }, { login: 0, password: 0 });
    return user;
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

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
    const result = await User.findOne(
      {
        login,
        password
      },
      { login: 0, password: 0 }
    );
    res.json(result);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
