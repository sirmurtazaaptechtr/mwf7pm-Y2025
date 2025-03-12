// Functions

function myFun () {
    console.log("Welcome to My Function");
}

function greetings (name) {
    console.log(`Hi ${name}, How do yo do?`);
}

function calcTwoNumbers (num1, num2, op) {
    switch(op) {
        case '+':
            return num1 + num2;
        break;
        case '-':
            return num1 - num2;
        break;
        case '*':
            return num1 * num2;
        break;
        case '/':
            return num1 / num2;
        break;
    }

}

let theFun = function () {
    console.log("This is the function");
}

let ourFun = () => {
    console.log("This is Our Function");
}

myFun();
myFun();

greetings("Shuja");
greetings("Shaharyar");
greetings("Hamiz");

let x = calcTwoNumbers(10,20,'+');
console.log(x);

console.log(calcTwoNumbers(15,3,'*'));

theFun();
ourFun();

// Loops
// While Loop
let names = ["Shuja","Shaharyar","Hamiz","Anas","Rahim","Qaim","Zain"];

let index = 0;
let n = names.length;

while(index < n) {
    console.log(`${index+1}`);
    greetings(names[index]);
    index++;
}
// For Loop

function printTab(number) {
    let tab = number;
    let table = [];
    for(let cnt = 1; cnt <= 10; cnt++) {
        console.log(`${tab} x ${cnt} = ${tab*cnt}`);
        table.push(`${tab} x ${cnt} = ${tab*cnt}`);
    }

    return table;
}


printTab(11);
printTab(13);
printTab(19);

printTab(2).forEach(function(row){
    document.getElementById('b1').innerHTML += `<p>${row}</p>`
});