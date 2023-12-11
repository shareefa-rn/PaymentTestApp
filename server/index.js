import express from "express";
import Stripe from "stripe";
// Creating express server

const app = express();
const port = 3000; //add your port here

const publishableKey =
  "pk_test_51OKOMZDIjkIdotnugn0n3oJUqBl1UzYz4vPJAgTtyaRo7zGF5yv8xlnRFVX7tZP9fEykGNCYnskoSNG0A2wQoUW000ixXXUR6K";
const secretKey =
  "sk_test_51OKOMZDIjkIdotnuY5bs1WLUBjznyqGw3GbKO8X4QKft4FK6LxaaM22OImSeRkhfTfpjHXIKisHGi25rsS6Jtyl0008LR1QBMQ";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(secretKey, { apiVersion: "2023-10-16" });

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**
 * Post method to create customer and setup intent
 * @return clientSecret,
 */

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //by default
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
