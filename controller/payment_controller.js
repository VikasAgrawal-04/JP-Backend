const instance = require("../index");
// const Razorpay = require("razorpay");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.checkout = catchAsyncError(async (req, res, next) => {
    
  const options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order, "order creation");
  res.status(200).json({ success: true });
});
