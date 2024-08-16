const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://prakhar102004:k0MygWxgt79l3uGc@cluster0.aufnhgq.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.use(express.json());

app.get("/signup", async function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  //
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("Username is already exist");
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  user.save();

  res.json({
    msg: "User created",
    user,
  });
});

app.listen(3000);
