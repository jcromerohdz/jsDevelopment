console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const _     = require('lodash');
const notes = require('./notes.js');

// fs.appendFile('greetings.txt', 'Hello world!')

let res  = notes.addNote();
let user = os.userInfo();
let add  = notes.addNum(5,5);
let filteredArray = _.uniq([3,3,4,4,5,6,6, 'Christian', 'Christian']);

console.log(_.isString(true));
console.log(_.isString("Christian"));
console.log(filteredArray);

//Creates a greetings.txt file with the content
//"Hello world!"
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + ' !');
// fs.appendFileSync('greetings.txt',  `Hello ${user.username}! You are ${notes.age}.`);
