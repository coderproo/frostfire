const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  totalWins: { type: Number, default: 0 },
  matches: [
    {
      opponentId: String,
      wins: Number
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);