const UserRepo = require('../../repositories/UserRepo');

function toResponse(user) {
  const response = { ...user };
  delete response.password;
  return user;
}

async function registerUser(dto) {
  const { email } = dto;

  const emailAlreadyInUse = await UserRepo.emailExists(email);

  if (emailAlreadyInUse) {
    throw new Error('Email already in use');
  }

  const user = await UserRepo.createNewUser(dto);

  return toResponse(user);
}

module.exports = registerUser;
