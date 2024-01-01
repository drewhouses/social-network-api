const { Schema, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max_length: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill in a valid email address"],
  },
  thoughts: [thoughtSchema],
  friends: [userSchema],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = Student;
