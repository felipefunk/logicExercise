const mongoose = require("mongoose");

mongoose.connect(`mongodb://db:27017`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => console.error("connection error:"));
mongoose.connection.once("open", () => console.log("database connected"));
