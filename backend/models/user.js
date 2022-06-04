const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },

    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: 8,
    },

    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },

    token: { type: String },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 20 * (60 * 1000);

  return resetToken;
};

const user = mongoose.model("user", userSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     username: Joi.string().required().label("Username"),
//     email: Joi.string().email().required().label("Email"),
//     password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validate(data);
// };

module.exports = user;
