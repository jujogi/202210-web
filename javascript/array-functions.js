// PUSH
const cart = [];
cart.push({
    name: "My product",
});
cart.push({
    name: "My product 2",
});

// FOREACH
cart.forEach(product => {
    // console.log("Printing my products: ", product.name);
});

// INCLUDES
const mySecondArray = ["test", "dog", "cat"];

const isTest = mySecondArray.includes("test"); // true or false
// console.log(isTest); // true

// JOIN
const myNewArray = mySecondArray.join("-");
// console.log(myNewArray);

// EVERY
const numbers = [1, 2, 3];
const numberGreaterThan10 = numbers.every(number => number > 0);
// SOME // Algun numero es par?
const numberisEven = numbers.some(number => number % 2 == 0);

// console.log(numberGreaterThan10);
// console.log(numberisEven);


// FILTER
const users = [
    {
        name: "alejandro",
        age: 20,
    },
    {
        name: "natalia",
        age: 22,
    },
    {
        name: "miguel",
        age: 16,
    }
];

const newUsers = users.filter(user => user.age > 18);
const nataliaUser = users.find(user => user.name === "natalia");

// = asignacion de valores
// == comparar solo el valor "1" == 1
// === compara el valor y el tipo de dato "1" === 1
// console.log(newUsers);
// console.log(nataliaUser);

// MAP
const myNewNumbers = numbers.map(number => number * 100);


// Exercise

const list = [10, 200, 30, 70, 180, 499];

// Crear un nuevo arreglo con los elementos mayores a 60. (filter).
const newListGreather60 = list.filter(number => number > 60);
console.log(newListGreather60);

// Validar si todos los elementos son menos de 500. (every).
const every500 = list.every(number => number < 500);
console.log(every500);

// Crear un string con todos los elementos separados por guión. (join).
const joinList = list.join("-");
console.log(joinList);

// Validar si existe algún elemento que sea impar. (some).
const oddNumbers = list.some(number => number % 2 !== 0);
console.log(oddNumbers);

// Crear un nuevo arreglo que multiplique cada valor por 20. (map).
const mapList = list.map(number => number * 20);
console.log(mapList);

// Ternary operator
// If pero en una sola linea
// (condicion) ? si se cumple : si no se cumple
every500 ? console.log("Todos son menores que 500") : console.log("Todos son mayores");

// spread operator (...)

const myCart = [
    {
        name: "Product 1"
    }
];

// poder agregar arreglos dentro de otro
const myNewCart = [
    ...myCart,
    {
        name: "hola",
    },
    {
        name: "hola 2"
    }
];


