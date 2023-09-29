const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerNewUser = async (req, res) => {
  const matched = await Users.exists({ phoneNumber: req.body.phoneNumber });
  if (matched) {
    res.status(409).json({
      msg: "User already exist!",
    });
  } else {
    // password  encrypt
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const hashMPIN = await bcrypt.hash(req.body.MPIN, 10);
    req.body.MPIN = hashMPIN;
    await Users.create(req.body);
    res.status(201).json({
      msg: "New user added successfully!",
    });
  }
};

const userLogin = async (req, res) => {
  const data = await Users.findOne({ phoneNumber: req.body.phoneNumber });
  if (data) {
    const compare = await bcrypt.compare(req.body.password, data.password);
    if (compare) {
      const token = jwt.sign(
        { phoneNumber: req.body.phoneNumber },
        process.env.SECRET_KEY
      );
      res.status(201).json({
        success: true,
        userDetails: data,
        token,
      });
    } else {
      res.json({
        success: false,
        msg: "Invalid password!!!",
      });
    }
  } else {
    res.json({
      success: false,
      msg: "Invalid phone number or password!!!",
    });
  }
};

// const userMPIN = async (req, res) => {
//   const userId = req.params.id;
//   const hashMPIN = await bcrypt.hash(req.body.MPIN, 10);
//   req.body.MPIN = hashMPIN;
//   const user = await Users.findById(userId);
//   if (user) {
//     res.status(200).json({
//       success: true,
//       message: "MPIN added successfully!",
//       MPIN: req.body.MPIN
//     });
//   }
// };

const getSpecificUser = async (req, res) => {
  try {
    const data = await Users.findById(req.params.id);
    res.json({
      msg: "successfully got data!",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  const data = await Users.find(req.body);
  res.json({
    msg: "success",
    data: data,
  });
};

// const changePassword = async(req,res)=>{
//     try{
//         const userId = req.params.userId;
//         const user = await Users.findById(userId)

//         const matched = await bcrypt.compare(
//             req.body.passwordCurrent,
//             user.password
//         );

//         if (matched) {
//             const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
//             req.body.password = hashedPassword;
//             const updatePassword = await Users.findByIdAndUpdate(
//                  userId, { password: req.body.password },
//             )

//             if (updatePassword) {
//               res.status(200).json({
//                 success: true,
//                 message: "Successfully changed password"
//               });
//             }
//           } else {
//             return res.status(401).json({
//               success: false,
//               message: "Your old password is wrong!",
//             });
//           }
//     }catch(err){
//         console.log(err.message)
//     }
// }

const deleteSpecificUser = async(req,res)=>{
const data = await Users.findOneAndDelete(req.params.id)
    res.json({
        msg: 'Account deleted successsfully!',
    })
}

module.exports = { registerNewUser, userLogin, getSpecificUser, getAllUser, deleteSpecificUser};
