const express = require("express");
const app = express();
const port = 3003;

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidney = [1,2]
  const kidneys = req.body.kidneys;

  const kidneyLength = kidneys.length;
  res.send("You have " + kidneyLength + " kidneys");
});

// Global catches
app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry something is up with our server",
  });
});

app.listen(port, () => {
  console.log(`Your app is running on ${port} port`);
});
