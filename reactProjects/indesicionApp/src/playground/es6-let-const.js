var nameVar = 'Christian';
nameVar = "Jose";
var nameVar = "Julian"
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "Julia";
//let nameLet = "Juan";
console.log('nameLet', nameLet);

const nameConst = "Frank";
//const nameConst = "Paco";
console.log('nameConst');

function getPetName() {
    var petName = "Bonny";
    return petName;
}

const petName=getPetName();
console.log(petName);

// Block scoping
var fullName = "Christian Romero";


 if(fullName){
     var firstName =  fullName.split(' ')[0];
     console.log(firstName)
 }

console.log(firstName)