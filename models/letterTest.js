const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  is_a_valid_test: Boolean,
});

const letterTestModel = mongoose.model("letterTest", schema);

module.exports = letterTestModel;
