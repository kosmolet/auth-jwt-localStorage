const User = require("../models/User");

exports.privateRoute = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: "You got access to the private data in this route",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
