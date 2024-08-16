const jwt = require("jsonwebtoken");

// decode, verify, gernate

const value = {
  name: "prakhar",
  accountNumber: 14541,
};

// jwt
const token = jwt.sign(value, "secret");
console.log(token);

// this token has been generated using this secret, and hence this token can only be verified using this secret

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJha2hhciIsImFjY291bnROdW1iZXIiOjE0NTQxLCJpYXQiOjE3MjM0NTQwODR9.2jENRipwJk3GpzcfEOEQ2mDlZKSwdLWwt95WhsOeYMs