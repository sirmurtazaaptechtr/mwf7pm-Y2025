// Conditional Statements
// Example 01 Even Odd
let num = 5;
if(num % 2 == 0) {
    console.log(`${num} is Even`);
}else {
    console.log(`${num} is Odd`);
}
// Example 02 login Auth
let username = prompt("Enter username");
let password = prompt("Enter password");
if(username == 'admin' && password == '1234') {
    console.log("Aap ka swagat hai!");    
}else {
    console.log("Invalid username or password!");
}
// Example 03 Exam Status
let max_marks = 75;
let obt_marks = 35;
let percentage = Math.round(obt_marks/max_marks * 100);
if(percentage >= 40) {
    console.log(`You have cleared exam with ${percentage}% marks`);
}else {
    console.log(`You have failed exam with ${percentage}% marks`);
}

// JavaScript Switch Statement
let op = Number(prompt("Enter your choice 1.ADD, 2.SUB, 3.MUL 4.DIV"));
let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));

switch(op) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
    case 3:
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
    break;
    case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    break;
    default:
        console.log(`Invalid Choice! Try Again`);
    break;
}