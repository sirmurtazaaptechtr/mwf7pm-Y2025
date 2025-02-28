console.log("JS is working...");

// Variables

a = 10;
var b = 20;
let c = 30;
const d = 40;
console.log(a,b,c,d);

a = 11;
b = 21;
c = 31;
//d = 41;
console.log(a,b,c,d);
/*

Types of JavaScript Operators 26-Feb-2025
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
*/
// JavaScript Arithmetic Operators

let num1, num2, res;

num1 = 15;
num2 = 3;

res = num1 + num2;
console.log(res);
console.log("Result = " + res);
console.log(num1 + ' + ' + num2 + ' = ' + res);

console.log(`Result = ${res}`);
console.log(`${num1} + ${num2} = ${res}`);

res = num1 - num2;
console.log(`${num1} - ${num2} = ${res}`);

res = num1 * num2;
console.log(`${num1} x ${num2} = ${res}`);

res = num1 ** num2;
console.log(`${num1} ^ ${num2} = ${res}`);

res = num1 / num2;
console.log(`${num1} / ${num2} = ${res}`);

res = num1 % num2;
console.log(`${num1} / ${num2} = ${res}`);

res++;// post increment
console.log(res);

++res;// pre increment
console.log(res);

res--;// post increment
console.log(res);

--res;// pre increment
console.log(res);

//++x; -> x = x + 1;
//x++; -> x = x + 1;
//--x; -> x = x - 1;
//x--; -> x = x - 1;

a = 5;
b = 3;

c = ++a + b;
// c = a++ + b;
console.log (a, b, c);

// c = --a + b;
c = a-- + b;
console.log (a, b, c);

// JavaScript Assignment Operators

a = b = c;
console.log (a, b, c);

//x += y; -> x = x + y;

a += c; // a = a + c;
console.log (a, c);

a -= c; // a = a - c;
console.log (a, c);

// JavaScript Comparison Operators

let x, y , z;

x = 10;
y = 5;
z = 4;


console.log(`${x} > ${y} -> ${x > y}`);
console.log(`${x-y} > ${z} -> ${x-y > z}`);
console.log(`${x-z} > ${y} -> ${x-z > y}`);
console.log(`${x-z} < ${y} -> ${x-z < y}`);
console.log(`${x-y} >= ${y} -> ${x-y >= y}`);

x = "10";
y = 10;
console.log(`${x} == ${y} -> ${x == y}`);
console.log(`${x} === ${y} -> ${x === y}`);

console.log(`${x} != ${y} -> ${x != y}`);
console.log(`${x} !== ${y} -> ${x !== y}`);

// JavaScript Logical Operators

console.log(`true AND true -> ${true && true}`);
console.log(`true AND false -> ${true && false}`);
console.log(`false AND true -> ${false && true}`);
console.log(`false AND false -> ${false && false}`);

console.log(`true OR true -> ${true || true}`);
console.log(`true OR false -> ${true || false}`);
console.log(`false OR true -> ${false || true}`);
console.log(`false OR false -> ${false || false}`);

// JavaScript Data Types - 28-Feb-2025

let data;
console.log(`${data} is ${typeof(data)}`);

data = 15;
console.log(`${data} is ${typeof(data)}`);

data = 22.7;
console.log(`${data} is ${typeof(data)}`);

data = true;
console.log(`${data} is ${typeof(data)}`);

data = false;
console.log(`${data} is ${typeof(data)}`);

data = "Ali Raza";
console.log(`${data} is ${typeof(data)}`);

data = "11";
console.log(`${data} is ${typeof(data)}`);

data = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam reprehenderit aut cupiditate sed atque obcaecati repudiandae dolore sunt fuga enim "mollitia aperiam", dolorem sequi corrupti pariatur sint deserunt dolor modi.';
console.log(`${data} is ${typeof(data)}`);

data = BigInt("123456789012345678901234567890");
console.log(`${data} is ${typeof(data)}`);

data = null;
console.log(`${data} is ${typeof(data)}`);

data = [
    "Ali Raza", 
    16, 
    true, 
    null
];
console.log(data);
console.log(`${data[0]} is ${typeof(data[0])}`);
console.log(`${data[1]} is ${typeof(data[1])}`);
console.log(`${data[2]} is ${typeof(data[2])}`);
console.log(`${data} is ${typeof(data)}`);

data = {
    name:"Ali Raza",
    age:16, 
    isMarried:true, 
    numKids:null
};
console.log(data);
console.log(`${data.name} is ${typeof(data.name)}`);
console.log(`${data.age} is ${typeof(data.age)}`);
console.log(`${data.isMarried} is ${typeof(data.isMarried)}`);
console.log(`${data.numKids} is ${typeof(data.numKids)}`);
console.log(`${data} is ${typeof(data)}`);

data = [
    {
        name:"Ali Raza",
        age:16, 
        isMarried:true, 
        numKids:null
    },
    {
        name:"Anas Qureshi",
        age:20, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Hamiz Nadeem",
        age:18, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Muzammil Ahmed",
        age:23, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Shuja Alam",
        age:20, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Syed Qaim",
        age:19, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Muhammad Shaharyar",
        age:17, 
        isMarried:false, 
        numKids:null
    },
    {
        name:"Zain ur Rehman Khan",
        age:24, 
        isMarried:false, 
        numKids:null
    }
];

console.log(data);

console.log(data[6]);
console.log(data[6].name);
console.log(data[6].age);
console.log(data[6].isMarried);
console.log(data[6].numKids);