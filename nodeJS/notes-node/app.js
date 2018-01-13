console.log('Starting app...');

const fs = require('fs');
const os = require('os');
// fs.appendFile('greetings.txt', 'Hello world!')


let user = os.userInfo();

//Creates a greetings.txt file with the content
//"Hello world!"
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + ' !');
fs.appendFileSync('greetings.txt',  `Hello ${user.username}!`);
