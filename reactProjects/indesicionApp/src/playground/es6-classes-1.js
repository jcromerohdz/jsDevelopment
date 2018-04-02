class Person {
    constructor(name = 'Anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name} !`; //Template strings
    }

    getDescription(){
        //return 'Hi. I am ' + this.name + '!';
        return `${this.name} is ${this.age} year(s) old.`; //Template strings
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
        return description;
    }

}



// Traveler -> Person
// Agragar el la propiedad homeLocation 
// Sobre escribir getGreeting
// Hi. I am Christian Romero. I'm visiting from Tijuana.
// Hi. I am Christian Romero


const me = new Person('Christian Romero', 38);
console.log(me.getGretting());
console.log(me.getDescription());

const anotherMe = new Student('Christian Romero', 38, 'Computer Science');
//console.log(anotherMe.getGretting());
console.log(anotherMe.getDescription());
//console.log(anotherMe.hasMajor());

const otro = new Student();
//console.log(otro.getGretting());
console.log(otro.getDescription());