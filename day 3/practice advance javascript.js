// CALLBACK  FUNCTION WITH setTimeout FUNCTION----------

// FUNCTION
let biodata = (Name,callback) =>{
let data = { N: Name , age: 22  };
console.log(data);
console.log(` My Name is : ${data.N} `);
//  call the callback function  withe the 4 second delay  and also pass argument
setTimeout(callback , 4000 , data);    
console.log(` i am main function after call back `);
};

// callback function
let callAge =  function(obj) {
 console.log(` My age is : ${obj.age} `);
 console.log(` i am  callback function `);

}

// Function call
biodata("yagnik", callAge);

// program to display time every 4 seconds-------------
function showTime() {
    // return new date and time
    let dateTime = new Date();
    // show local time
    console.log(dateTime.toLocaleTimeString());
    // recursive call showTime function
    setTimeout(showTime,4000);

}
showTime();

// SET INTERVAL FUNCTION  WITH 2 SECOND INTERVAL-------------
 
setInterval(function(){
     console.log("hello i am yagnik");
},2000);

// promise with error handling try cache block--------


// create promise as a constructor
let firstPromise = new Promise (function(resolve,reject){
let a=10;
let b=20;
    if (a<b) {
        resolve("b is grater , success ");
    } else {
        reject(" a is not grater ")
    }
});
firstPromise.then(function (success){
    console.log(success);
} ).catch(function(error){
    console.log(error);
});