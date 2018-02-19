// arguments objects - no longer bound with arrow function

const add = function (a, b){
    console.log(arguments);
    return a + b;
}

// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

console.log(add(55, 1))

// this keyword - no longer bound c

const user = {
    name: 'Christian',
    cities: ['Tijuana', 'Guadalajara', 'Ensenada'],
    printPlaces() {
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has been in ' + city;
        return this.cities.map((city) => this.name + ' has been in ' + city);
        //});

        // return this.cities.map((city) => this.name + ' has been in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has been in ' + city)
        // });
        return cityMessages;
    }
};

console.log(user.printPlaces());

//Practica
const multiplier = {
    // numbers - arreglo de numeros[1,2]
    // multiplyBy - un solo numero 
    // multiply - regresa un nuevo arreglo multiplicado por multiplyBy
}

//verlo con console.log(multiplier.multiply()) //[2,4]