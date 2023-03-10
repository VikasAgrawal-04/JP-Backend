const express = require("express");
const { checkout } = require("../controller/payment_controller");

const router = express.Router();
router.route("/payment").post(checkout);
module.exports = router;
