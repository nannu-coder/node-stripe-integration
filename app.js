require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connect = require("./db/Connect");
const app = express();
const port = process.env.PORT || 5000;

//Paths
const notFoundMiddleware = require("./middleware/Not-Found");
const errorHandlerMiddleware = require("./middleware/ErrorHandler");
const stripeController = require("./controllers/stripeController");

//Use Middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Stripe Payment!");
});

app.post("/stripe", stripeController);

//Error Handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startDB();
