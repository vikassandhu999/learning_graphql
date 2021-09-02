const User = require('../models/User.model');
const Password = require('../utils/Password');

async function emailExists(email) {
  return User.exists({ email });
}

async function findByEmail(email) {
  return User.findOne({ email });
}

async function createNewUser(dto) {
  const { name, email, password } = dto;
  const hashedPassword = Password.hash(password);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();
  return newUser;
}

const UserRepo = {
  emailExists,
  findByEmail,
  createNewUser,
};

module.exports = UserRepo;
