const express = require("express");
const bodyParser = require("body-parser");
const key = require("./config/key");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Declaring route for users apis
const users = require("./routes/api/users");
app.use("/api/users", users);

//Creating connection with MongoDB cluster on atlas
mongoose
  .connect(key.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`app listening on port ${port}`));
