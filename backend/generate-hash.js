// backend/generate-hash.js
const bcrypt = require('bcryptjs');

const password = 'dokter123'; 
bcrypt.hash(password, 10, (err, hash) => {
  console.log('Hash untuk password "' + password + '":');
  console.log(hash);
});