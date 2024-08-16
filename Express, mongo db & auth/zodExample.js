const express = require("express");
const zod = require("zod");
const app = express();
const port = 3004;

// What we create in this example
/* 
   {
      email : string => email
      password: at least 8 letters
      country: "IN", "US"
   }
*/
app.use(express.json());

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

function validate(obj) {
  return schema.safeParse(obj);
}

app.post("/health-checkup", function (req, res) {
  const response = validate(req.body);
  if (!response.success) {
    res.status(400).json({
      msg: "Your inputs are invalid",
      errors: response.error.errors,
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
