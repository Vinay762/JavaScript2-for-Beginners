// console.log("script start");

// function hello(){
//     console.log("hello World");
// }

// //setTimeout(hello, 5000); //ye ek function lega + time lega
// //using => functon
// setTimeout(() => {
//     console.log("Inside Arrow Function");
// },5000)

// console.log("script end");



// A very good question

// console.log("script Start");

// setTimeout(() => {
//     console.log("Inside SetTimeOut");
// }, 0);

// for(let i = 1; i<100; i++){
//     console.log("....");
// }

// console.log("script End");



//set timeout ek id return karta hai

console.log("script start");

const id = setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

console.log(id);

for(let i = 0; i<100; i++){
    console.log("...");
}

clearTimeout(id);

console.log("script End");


