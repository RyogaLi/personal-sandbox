// Write a function declaration for a function that returns the product of two arguments
const product = function(x,y){return x * y}

//  Write an arrow function that returns half the sum of every number in an array
const halfsum = (numbers) => {
    sum = 0;
    for (const index in numbers) {
        sum += numbers[index];
    };
    return sum/2;
}

//  Write a function expression that accepts 3 strings and returns an array of those strings in alphabetical order
// Hint: check out the sort array method
const sortStrings = function(s1, s2, s3){
    return [s1, s2, s3].sort();
}

