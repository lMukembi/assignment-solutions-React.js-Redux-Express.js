const mongoose = require("mongoose");

const user = require("../models/user");

const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const emailReset = require("../utils/emailReset");

exports.signup = async (req, res) => {
  const userAccount = await user.create(req.body);

  await userAccount.save();

  const result = { id: userAccount.id };
  const token = jwt.sign(result, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({ success: true, result: userAccount, data: token });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const userAccount = await user.findOne({ email });

  if (!userAccount) {
    return res.status(400).json({
      message: "The email is not yet registered",
    });
  }

  const passwordMatch = await bcrypt.compare(password, userAccount.password);

  if (!passwordMatch) {
    return res.status(404).json({ message: "The password does not match" });
  }

  const result = { id: userAccount.id };
  const token = jwt.sign(result, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({ success: true, result: userAccount, data: token });
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const userAccount = await user.findOne({ email });

    if (!userAccount) {
      return next({ error: "Email address could not be sent check again" });
    }
    const resetToken = userAccount.getResetPasswordToken();

    await userAccount.save();

    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;

    const resetMessage = `
      <h1>You have requested a password reset</h1>
      <p>To reset your password, click the link below</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
      `;
    try {
      await emailReset({
        to: userAccount.email,
        subject: "Password Reset Request",
        text: resetMessage,
      });

      res.status(200).json({ success: true, message: "Email sent" });
    } catch (error) {
      userAccount.resetPasswordToken = undefined;
      userAccount.resetPasswordExpire = undefined;

      await userAccount.save();

      return next({ error: "Email could not be sent" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
};

// exports.resetPassword = async (req, res, next) => {
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const userAccount = await user.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!userAccount) {
//       return next({ error: "invalid token" });
//     }

//     userAccount.password = req.body.password;
//     userAccount.resetPasswordToken = undefined;
//     userAccount.resetPasswordExpire = undefined;

//     await userAccount.save();

//     return res
//       .status(200)
//       .json({ success: true, message: "You have successfully reset password" });
//   } catch (error) {
//     return next({ error: "Password reset failed" });
//   }
// };

module.exports.getUser = async (req, res, next) => {
  console.log("fadhk");
  try {
    const userAccount = await user.findOne({ _id: req.params.id });

    res.status(200).json(userAccount);
  } catch (error) {
    res.status(404).json({ message: "Could not fetch the user please!" });
  }
};

module.exports.editUser = async (req, res) => {
  const { id } = req.params;
  const { email, username, phone } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("This user does not exist.");

  const updatedUser = {
    email,
    username,
    phone,
    _id: id,
  };

  await user.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};
