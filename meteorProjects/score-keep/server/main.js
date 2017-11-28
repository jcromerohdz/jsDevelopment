// import './../imports/utils';
// import {greetUser} from './../imports/utils';
// import {add} from './../imports/math';

// import addNums, {add} from './../imports/math';
//
// console.log("Log from /sever/main.js");
// console.log(greetUser());
// console.log(addNums(6,5));

import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
  // Players.insert ({
  //   name: 'Christian',
  //   score: 3
  // });
  // Players.insert ({
  //   name: 'Claudio',
  //   score: 4
  // });
  // Players.insert ({
  //   name: 'Alex',
  //   score: 5
  // });
  //
  // console.log(Players.find().fetch());
  class Person{
    constructor(name = 'Anonumous', age=0){
      this.name = name;
      this.age = age;
      //Set age
    }
    getGreeting(){
      return `Hi! I am ${this.name}, I am ${this.age} old!`;
    }
    getPersonDescription(){
      return `${this.name}, is ${this.age} year(s) old.`
    }
  }

    class Employee extends Person {
      constructor(name, age, title){
        super(name, age);
        this.title =title;
      }

      getGreeting() {
         if (this.title){
           return `Hi! I am ${this.name}. I work as a ${this.title}`;
         }else{
           return super.getGreeting();
         }
      }
      hasJob(){
        return !!this.title;
      }
    }

//Programmer -> extends from Person
// name, age, preferredLanguage default to 'assambly'
// Override getGreeting
  //Hi! I am Christian, I am a assambly developer.

  class Programmer extends Person{
    constructor(name, age, preferredLanguage='assambly'){
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting(){
      if (this.preferredLanguage){
        return `Hi! I am ${this.name}, I am a ${this.preferredLanguage} developer`;
      }else{
        return super.getGreeting();
      }
    }
  }

  let obj = {
    name: 'Christian',
    printName(){
      console.log(`Name: ${this.name}`);
    }
  };

  setTimeout(obj.printName.bind(obj), 1000);

  let me = new Employee('Christian', 38, 'db admin');
  let anotherme = new Programmer('Christian', 38, 'Javascript');
  console.log(anotherme.getGreeting());
  // console.log(me.hasJob());
  // console.log(another.getPersonDescription());
});
