const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    transactionType: {
      type: String,
    },

    transactionDetails: {
      transferredFrom: {
        type: String,
        default: "",
      },
      transferredTo: {
        type: String,
        default: "",
      },
      balance: {
        type: Number,
        default: 0,
      },

      amount: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a customer name"],
    },

    accNo: {
      type: String,
      required: true,
      default: mongoose.Types.ObjectId,
    },
    gender:{
      type:String,
      required:true,
      default:""
    }
    ,
    email: {
      type: String,
      required: [true, "Please provide an email address"],
    },
    transactions: [transactionSchema],
    currentBal: {
      type: Number,
      required: [true, "Please provide a valid balance"],
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
