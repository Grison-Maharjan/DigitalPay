const Users = require("../models/transaction");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sendMoney = async (req, res) => {
  const matched = await Users.exists({ receiverNumber: req.body.phoneNumber });
  if (matched) {
    const hashMPIN = await bcrypt.hash(req.body.MPIN, 10);
    req.body.MPIN = hashPassword;
    await Users.create(req.body);
    res.status(201).json({
      msg: "Transaction successful!",
    });
  } else {
    res.status(409).json({
        msg: "User does not exist!",
      });
  }
};

module.exports = { registerNewUser };
