const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  res.send("login");
};

exports.forgotPassword = async (req, res, next) => {
  res.send("forgot");
};

exports.resetPassword = async (req, res, next) => {
  res.send("reset");
};
