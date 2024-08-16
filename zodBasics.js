const express = require("express");
const zod = require("zod");
const app = express();
const port = 3004;

// Zod Basics
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidney = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(401).json({
      err: "Input is invalid",
    });
    return;
  }
  res.json({
    response,
  });
});

app.listen(port, () => {
  console.log(`Your app is running on ${port} port`);
});
