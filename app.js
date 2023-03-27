const db = require("./setup/db");

const letterTestModel = require("./models/letterTest.js");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const checkSequenceInLetters = require("./logicFuntions/functionsForVerifyLetters.js");
const countAllTests = require("./logicFuntions/countAllTests.js");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/stats", async (req, res) => {
  try {
    const test = await letterTestModel.find();

    res.send(countAllTests(test));
  } catch (error) {
    res.send(500, error);
  }
});

app.get("/", async (req, res) => {
  try {
    const test = await letterTestModel.find();
    res.send(test);
  } catch (error) {
    res.send(500, error);
  }
});

app.post("/sequence", async (req, res) => {
  try {
    const bodyWithAllLetters = await req.body;
    const hasSequenceInLetters = checkSequenceInLetters(bodyWithAllLetters);

    const novoDado = new letterTestModel({
      is_a_valid_test: hasSequenceInLetters,
    });

    try {
      await novoDado.save();
    } catch (err) {
      console.log(err.message);
    }

    res.send({ is_valid: hasSequenceInLetters });
  } catch (error) {
    res.send(
      500,
      error
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
