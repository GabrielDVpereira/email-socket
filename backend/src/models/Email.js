const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema(
  {
    title: String,
    body: String,
  },
  {
    collection: "email",
  }
);

module.exports = mongoose.model("Email", EmailSchema);
