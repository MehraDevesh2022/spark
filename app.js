const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const cors = require("cors");

require("dotenv").config();

const { indexController } = require("./controllers/indexController");
const {  customerDisplayController} = require("./controllers/customerDisplayController");
const {displayTransactionsController,} = require("./controllers/displayTransactionsController");
const { transferFundsController,} = require("./controllers/transferFundsController");
const {customerAddController} = require("./controllers/customerAddController");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

const connection = mongoose.connect(
      process.env.DB_URI,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  connection
    .then((response) => {
      console.log("Database has been connected!");
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on Port: 8000`);
      });
    })
    .catch((err) => {
      console.log(err);
    });


app.get("/", indexController);
app.get("/customers/:id", customerDisplayController);
app.get("/customers/:id/transactions", displayTransactionsController);
app.post("/customers/:id/transferFunds", transferFundsController);
app.post("/customers", customerAddController);



