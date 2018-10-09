const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) =>{
//     bcrypt.hash(password, salt, (err, hash) =>{
//         console.log(hash);
//     })
// })
let hashedPassword = '$2a$10$IToqzRxm03GK7IsnoupzDOHs/YX5OZzuG0Kxen5kNXfFCfMDJdOFm';

bcrypt.compare('password', hashedPassword, (err, res) =>{
    console.log(res);
});
// let data = {
//     id:10
// }

// let token = jwt.sign(data,'123abc');
// let decode = jwt.verify(token, '123abc');
// console.log(token)
// console.log(decode);
// let message = 'i\'m user no. 3';

// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }



// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('data was not changed');
// }else {
//     console.log('data was changed');
// }