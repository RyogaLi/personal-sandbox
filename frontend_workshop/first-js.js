console.log("this is inside of the js");

// "hello", 'hi', `hi`, these are all strings
// 123, 344, 2232.1, this are all numbers 
// true, false, boolean
// symbol -- allows you to have a unique property 
// null -- I have a value of nothing
// undefined -- I don't have a value
// you can make string + number, which gives you a string (i.e "a" + 2 = "a2") 
// initialize a variable, always use let or const
// only use let if you know this might be changed in the code later 
let a = 3;
// if you make a var with const, this var cannot be re-assigned to another type 
const total = "1";
let localCurrency;

const player = [1,12,3,4];

// three ways to define a function
// an arrow function is slightly different than the other two 
// a method is a function stored in an object 
function myFunction(x,y){}
// const myFunction = function(x,y){}
// const myFunction = (x,y) => {}

const item = {
    tax: 1.13,
    price: 50,
    localTax: function(){
        this.price * this.tax
    }
}
