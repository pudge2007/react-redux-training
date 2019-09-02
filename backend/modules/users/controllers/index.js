const User = require("../models/user.model");

const sendErrorMessage = (err, res) =>
  res.status(500).json({
    message: err.message || err
  });

exports.getUser = async (id, res) => {
  try {
    const user = await User.findById(id, { password: 0 });
    return user;
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.signUp = async (req, res) => {
  const user = req.body;
  user.login = user.email.split('@')[0];
  const newUser = new User(user);

  try {
    const result = await newUser.save();
    res.json(result);
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await User.findOne(
      {
        email,
        password
      },
      { password: 0 }
    );
    if (!result) {
      res.status(401).json({
        message: "Неверные данные!"
      });
    } else {
      res.json(result);
    }
  } catch (err) {
    return sendErrorMessage(err, res);
  }
};
