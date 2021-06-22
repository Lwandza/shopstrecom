const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IoR6OH6MOzWeMSY33WJoLkORyvofLjG5MEemEKCi4Lxu8QLOJEbyLC2Qz5OyDaSFDoQ4tc3XF9dSNMR7JnH0MXe002oNyDNnT"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("CREATED BY LWANDZA"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;


  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// EXAMPLE ENDPOINT
//http://localhost:5001/eco-app-b9aee/us-central1/api