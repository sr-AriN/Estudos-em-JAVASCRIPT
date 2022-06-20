"use strict";
// Tipagem padrão do Typescript
// const x: number = 10
// console.log(x)
let x = 10;
x = 25;
// x = "teste"
console.log(x);
// Inferencia x Annotation
let y = 12; // Inferencia // Tipo ja determinado automáticamente
// y = "teste"
let z = 12; // Annotation // Tipo determinado manualmente
// Tipos básicos
let firstName = "Ariel";
let age = 21;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
// Object // Sintaxe de array
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); // Método exclusivo de string
console.log(firstName.toUpperCase());
// Tuplas -> Tuple // Define o tipo de elementos no array a ser definido
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true] // Inválido
// Object literals -> {prop: value}
const user = {
    name: "Ariel",
    age: 21
};
console.log(user);
console.log(user.name);
// any // Contra intuitivo do Typescript
let a = 0;
a = "teste";
a = true;
a = [];
// Soluções em caso de entrada de muitos tipos
// union type
let id = "10";
id = 10;
const userId = 10;
const productId = 10;
const shirId = "00001";
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
// teste = "outroValor"
teste = "autenticado";
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true));
//                               : O que é retornado
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Ariel"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
//                              Opcional
function greeting(name, greet) {
    if (greet) { // Verifica se o opcional foi inserido  // Narrowing
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Ariel");
greeting("Ariel", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// Narrowing // Checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
// Classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O usuário é um ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
zeca.showUserRole(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// Herança
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
// Decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
// @BaseParameters()
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const sam = new Person("Sam");
console.log(sam);
