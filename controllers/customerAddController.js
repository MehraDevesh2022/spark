const Customer = require("../models/customerModel");
console.log("heloo")
exports.customerAddController = (req, res) => {
    console.log(req.body);
  
    const { name,email, currentBal,gender } = req.body;
    const customer = new Customer({
      name: name,
      email: email,
      currentBal: currentBal,
      gender:gender
    });
  
    customer.save((err, result) => {
      if (err !== null && err.name === "ValidationError") {
        // console.log(err);
        res.json({ messssage: err._message });
      } else {
        // console.log(result);
        res.render("addPage")}
    });
  };