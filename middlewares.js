const express = require("express");
const app = express();
const port = 3002;

// Bad way of doing things --- Middlewas not introduce yet

// app.get("/health-checkup", function (req, res) {
//   const kidneyID = req.query.kidneyID;
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if (username != "prakhar" || password != "pass") {
//     res.status(403).json({
//       msg: "User Does not exist",
//     });
//     return;
//   }

//   if (kidneyID != 1 && kidneyID != 2) {
//     res.status(411).json({
//       msg: "Wrong Input",
//     });
//     return;
//   }

//   res.send("Your heart is healthy");
// });

// Start understanding Middlewares

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "prakhar" || password != "pass") {
    res.status(400).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyID = req.query.kidneyID;
  if (kidneyID != 1 && kidneyID != 2) {
    res.status(401).json({
      err: "Wrong kidney inputs",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("You are healthy");
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
