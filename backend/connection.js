const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://sakshamyogesh:SAKSHAM0000@cluster0.tssultr.mongodb.net/test
`,
  () => {
    console.log("connected to mongodb");
  }
);
