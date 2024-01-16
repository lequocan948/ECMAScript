'use strict'

function multiply(num1, num2){
    return num1 * num2;
}

const multiply = (num1, num2) => num1 * num2;

function toCelcius(fahrenheti){
    return (5/9) * (fahrenheti - 32);
}

const toCelcius = fahrenheti => (5/9) * (fahrenheti - 32);

function padZeros(num, totalLen){
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}

const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    const numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}

function power(base, exponent){
    var result = 1;
    for( var i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}

const power = (base, exponent) => {
    var result =1;
    for( var i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}

function greet(who){
    console.log("Hello, " + who + "!");
}

const greet = who => {
    console.log(`Hello, ${who}!`);
}
