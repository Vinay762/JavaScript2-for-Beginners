const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'price'];
//promise value jo hame baad me pta chalegi

const myPromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt")){
        resolve("fried Rice");
    }else{
        reject("couldn't do it");
    }
})

//till now we have produced the promise 

//consume
//how to consume

myPromise.then((res)=>{
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

//if two things are placed in callback queue & microtask queue
// then first micro-task queue 