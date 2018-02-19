const square = function () {
    return x * x;
};


const squareArrow = (x) =>{
    return x * x;
};

const squareArrowTwo = (x) => x * x;

console.log(square(8));
console.log(squareArrow(8));

//get_first_name("Christian Romero") // Christian
//Completa verbose
//Corta

// const getFirstName = (fullName) =>{
//     return fullName.split(' ')[0];
// };

const getFirtName = (fullName) => fullName.split(' ')[0];

console.long(getFirstName('Christian Romero');)