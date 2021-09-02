const jwt = require('jsonwebtoken');
const UserRepo = require('../../repositories/UserRepo');
const Password = require('../../utils/Password');

const EmailOrPasswordDoesNotMatch = new Error("Email or Password doesn't match");

async function createLoginToken(user) {
  const secret = process.env.ACCESS_TOKEN_SECRET;
  const expiresIn = process.env.TOKEN_EXPIRATION_TIME;

  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, secret, {
    expiresIn,
    algorithm: 'HS256',
  });
}

async function loginUser(dto) {
  const { email, password } = dto;
  const user = await UserRepo.findByEmail(email);
  if (!user) {
    throw EmailOrPasswordDoesNotMatch;
  }

  const passwordMatch = Password.compare(password, user.password);
  if (!passwordMatch) {
    throw EmailOrPasswordDoesNotMatch;
  }

  const accessToken = createLoginToken(user);

  return { accessToken };
}

module.exports = loginUser;
