const bcrypt = require('bcrypt');

const SALTS = 10;

const Password = {
  hash: (plainText) => bcrypt.hashSync(plainText, SALTS),
  compare: (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword),
};

module.exports = Password;
