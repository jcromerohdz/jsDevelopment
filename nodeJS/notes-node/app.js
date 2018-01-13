console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
// fs.appendFile('greetings.txt', 'Hello world!')

let res  = notes.addNote();
let user = os.userInfo();
let add  = notes.addNum(5,5);

console.log(add);

//Creates a greetings.txt file with the content
//"Hello world!"
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + ' !');
// fs.appendFileSync('greetings.txt',  `Hello ${user.username}! You are ${notes.age}.`);
