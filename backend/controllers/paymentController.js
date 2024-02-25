const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const processPayment = catchAsyncErrors(async (req, res, next) => {
 
const paymentIntent = await stripe.paymentIntents.create({
  description: 'Software development services',
  shipping: {
    name: req.body.name,
    address: {
      line1: req.body.address,
      postal_code: req.body.pinCode,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country
    },
  },
  amount: req.body.amount,
  currency: 'usd',
  payment_method_types: ['card'],
});

  res
    .status(200)
    .json({ success: true, client_secret: paymentIntent.client_secret });
});


module.exports = {processPayment}

 
