const crypto = require("crypto");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    user = new User({
      username,
      email,
      password,
    });

    const newUser = await user.save();
    res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Please provide email and password" });
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Email! or password are invalid" });
    }

    //const isPasswordMatch = await bcrypt.compare(password, user.password);
    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, erorr: "Email or password! are invalid" });
    }

    // const payload = {
    //   user: {
    //     userId: user._id,
    //   },
    // };

    // const token = jwt.sign(payload, JWT_SECRET, {
    //   expiresIn: "1hr",
    // });
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  res.send("forgot");
};

exports.resetPassword = async (req, res) => {
  res.send("reset");
};
