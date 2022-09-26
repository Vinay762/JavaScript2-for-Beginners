// function myFunc(callback){
//     console.log("Function is doing  task 1");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing doing task 2");
// }

// myFunc(myFunc2);


function getTwoNumbersandAdd(number1, number2, callback){
    console.log(number1, number2);
    callback(number1, number2);
}

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

getTwoNumbersandAdd(4,5, addTwoNumbers);