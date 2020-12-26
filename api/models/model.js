var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      maxlength: 20,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 20,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female", "unknown"],
      default: "unknown",
    },
    age: Number,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
