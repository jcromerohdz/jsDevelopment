console.log('Starting notes.js');

// console.log(module);
// module.exports.age = 38;

module.exports.addNote = () =>{
  console.log('addNote');
  return 'New note';
};

module.exports.addNum = (a,b) =>{
  console.log('add');
  return a+b;
};
