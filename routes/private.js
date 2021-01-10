const express = require("express");
const router = express.Router();
const { privateRoute } = require("../controllers/private");
const { isAuthenticated } = require("../middleware/auth");

router.get("/", isAuthenticated, privateRoute);

module.exports = router;
