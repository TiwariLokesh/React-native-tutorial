// const express = require('express');
// const bodyParser = require('body-parser');
// const Stripe = require('stripe');
// require('dotenv').config();
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/create-payment-intent', async (req, res) => {
//   try {
//     const { amount, email } = req.body;
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       receipt_email: email,  // Include the email for receipt
//     });
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });





const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
require('dotenv').config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to create a PaymentIntent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent with the amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // You can use other currencies if needed
    });

    // Send the client secret to the client
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
