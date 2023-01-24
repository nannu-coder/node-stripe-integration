# Stripe Payment Node.js Project

This project is an example of how to integrate Stripe payments into a Node.js application.

## Getting Started

1. Clone the repository
   `git clone [https://github.com/nannu-coder/node-stripe-integration](https://github.com/nannu-coder/node-stripe-integration)`

2. Install the dependencies

`npm install`

3. Set up a Stripe account and add your API keys to the `.env` file

4. Start the server

`npm start`

## Usage

To make a payment, send a `POST` request to the `/stripe` endpoint with a JSON body containing the following information:

- `amount`: The amount of the payment in cents
- `currency`: The currency of the payment (e.g. "usd")
- `source`: The Stripe token representing the payment method

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Stripe](https://stripe.com/)

## Author

[Nannu](https://github.com/nannu-coder/)
