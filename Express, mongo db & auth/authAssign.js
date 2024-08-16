const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameRes = emailSchema.safeParse(username);
  const passwordRes = passwordSchema.safeParse(password);
  if (!usernameRes.success || !passwordRes.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );

  return signature;
}

function verify(token) {
  const verified = jwt.verify(token, jwtPassword);
  if (verified) {
    return true;
  } else {
    return false;
  }
}

function decode(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

const ans = signJwt("prakhar1@gmail.com", "5441554");
console.log(ans);

const dec = decode(ans);
console.log(dec);

console.log(verify(ans));
