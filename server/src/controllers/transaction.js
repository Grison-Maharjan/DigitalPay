const Transaction = require("../models/transaction");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TransactionMoney = async (req, res) => {
    const matched = await Users.exists({ receiverNumber: req.body.phoneNumber });
    if (matched) {
      const compareMPIN = await bcrypt.compare(req.body.MPIN, data.MPIN);
      if(compareMPIN){
          await Transaction.create(req.body);
          res.status(201).json({
            msg: "Transaction successful!",
          });
      }
    } else {
      res.status(409).json({
          msg: "User does not exist!",
        });
    }
  };

const requestMoney = async (req, res) => {
  const matched = await Users.exists({ receiverNumber: req.body.phoneNumber });
  if (matched) {
    // const compareMPIN = await bcrypt.compare(req.body.MPIN, data.MPIN);
    // if(compareMPIN){}
        await Transaction.create(req.body);
        res.status(201).json({
          msg: "Request successful!",
        });
    
  } else {
    res.status(409).json({
        msg: "User does not exist!",
      });
  }
};

module.exports = { requestMoney, TransactionMoney };
