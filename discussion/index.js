console.log("check");
/*
    Data structures
        - used to organized and manage the data effectively
    Arrays
        - are ordered connection of elements or items that can hold multiple values
        - [] array literals
    Index/subscript
        -it refers to the position of an element in data structure
        -in JS, the arrays indices are zero-based (meaning the first element at an array starts at 0)
    mutator methods
        - these are the functions that 'mutate' or change an array after they are created
        - these methods manipulate the original array performing various tasks such as adding and removing elements
            -push()
                - adds an element in the end of an array and return the array's length
                - stacks
                    - last in first out data structure (LIFO)
                    - pile plates
                - syntax: arrayName.push();
            -pop()
                - removes the last element in an array and returns the removed element
                - syntax: arrayName.pop();
            -shift()
                - removes the first element in an array and returns the removed element
                - syntax: arrayName.shift();
                - queue - FIFO
*/

let beatles = ["John", "Paul", "Gringo", "George"];
console.log(beatles);
console.log(`Current array: `, beatles);
let myBasket = ["Happy", 36, true, -9];
console.log(myBasket);
let beatlesLength = beatles.push("Rob");
console.log(beatlesLength);
console.log(`mutated array from push method`);
console.log(beatles);

let person = {
  name: "Happy",
  age: 36,
  isSingle: true,
  isGrade: 99,
};
console.log(person);

//Adding multiple elements to an array

beatles.push("Ken", "Jedd");
console.log(beatles);

let removedMem = beatles.pop();
console.log(beatles);
console.log(removedMem);

let removefirst = beatles.shift();
console.log(beatles);
console.log(removefirst);

/* splice
    -simultaneously removes element from specified index num and add elements
    -syntax: arrayName.splice(startingindex, deletecount, elementstobeadded)
*/
let usesplice = beatles.splice(0, 2, "John", "Paul");
console.log(beatles);

/*
sort
    -rearranges the elements in alphanumeric order
    -syntax: arrayname.sort()
*/

beatles.sort();
console.log(beatles);

/*
reverse()
-reverses the order of the array
-syntax: arrayname.reverse()
*/

beatles.reverse();
console.log(beatles);

/*
non-mutators methods
   functions that do not modify or change an array after they are created
   these methods do not manipulate the original array performing various tasks such as returning elements from an array
   and combining arrays and printing the output 
*/

let countries = ["US", "PH", "CAN", "SG", "JP", "TH", "FR", "DE"];

/* 
indexOf()
returns the index number of the first matching element found
if no match is found the result will be -1
the search process will be done from the first element proceeding to the last element 
syntax:
arrayName.indexOf(searchValue);
arrayName.indexOf(searchValue, fromIndex);
*/
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log(firstIndex);

let invalidCountry = countries.indexOf("BR");
console.log(invalidCountry);

/*
lastIndexOf()
returns the index number of the last matching element found
if no match is found the result will be -1
the search will be done from the last element proceeding to the first element
syntax:
arrayName.lastIndexOf(searchValue);
arrayName.lastIndexOf(searchValue, fromIndex);
*/

let lastIndex = countries.lastIndexOf("FR");
console.log(lastIndex);

// Getting the index number starting from a specified index

let lastIndex2 = countries.lastIndexOf("DE", 3);
console.log(lastIndex2);

/*
slice()
    -portions/slices the elements from an array and returns a new array
    - syntax:
        arrayName.slice(startingIndex)
        arrayName.slice(startingIndex, endingIndex);

*/

let sliceCountry = countries.slice(2, 4);
console.log(sliceCountry);

let sliceCountry2 = countries.slice(-2);
console.log(sliceCountry2);

/*
toString()
    -returns an array as a string seperated by comma
    -syxntax: arrayName.toString()
*/

console.log(countries.toString());
let numString = [4, 7, 15];
console.log(numString.toString());

/*
concat()
-combines two arrays and returns the combined result
-syntax: array1.concat(array2);
*/

console.log(countries.concat(numString, beatles));
console.log(countries.join(", "));
/*
iterations mthods
    - iteration methods are loops designed to perform repetitive tasks
    - iteration method loops overall items in an array
    - useful for manipulating array data resulting in complex tasks
    - array iteration methods normally with function supplied as an argument
    forEach()
        -similar to a for loop that iterates on each array element
        -for each items in the array, the anonymous function passed in the forEach() method will be run
            -the anonymous function is able to received the current item being iterated or loop over by assigning a parameter
            -variable names for arrays are normally written in the plural form of the data stored in
            syntax:arrayName.forEach(function(indivElement)) {code block}
*/

countries.forEach(function (country) {
  console.log(country);
});

/*
map
    -iterates on each element and return new array with different values depending on the result of the function's operation
    -this is useful for performing tasks where mutating/changing the elements are required
    -unlike the foreach method, the map method requires the use of a return statement in order to create another array
    with the perform operation
    -syntax: let resultArray = arrayname.map(function(indivElement))
*/

let sumnum = numString.map(function (sum) {
  return sum + sum;
});
console.log("map");
console.log(sumnum);

/*
every()
    -check if all elements in array meet the given condition
    -this is useful for validating data stored in arrays especially when dealing with large amounts of data
    -returns a true value if all elements meet the condition and false if other wise
    -syntax: let resultArray = arrayName.every(function(indivElement)) {
    return expression/condition;
    }

*/

let sampleArray = numString.every(function (sample) {
  return sample < 3;
});
console.log(sampleArray);

/*
some()
-check if at least one element in the array meets the given conditon
-returns a true value if at least one element meets the condition 
and false if otherwise
-syntax: let resultArray = arrayName.some(function(indivelement){
return expression/condition
})
*/

let sampleArray2 = numString.some(function (sample) {
  return sample == "4";
});
console.log(sampleArray2);

/*
filter()
-returns new array that contains elements which meets the given conditon
-returns an empty array if no elements were found
-useful for filtering array elements with a given condition and shortens the syntax compared to using other array iteration methods
syntax: let resultArray = arrayName.filter(function(indivelement){
return expression/condition
})
*/

let sampleArray3 = numString.filter(function (sample) {
  return sample < 10;
});
console.log(sampleArray3);

/*
includes()
-includes() method checks if the argument passed can be found in the array
-it returns boolean which can be saved in a variable
-returns false if the argument is not found
-syntax:arrayName.includes(<argumenttoFind)
*/

let sample = countries.includes("PH");
console.log(sample);

/*
methods can be chained using one after another
the result of the first method is used on the second method until all 'chained' methods have been resolve
--how chaining resolves in our example:
    1. the 'product' element will be converted into all lowercase
    2. the resulting lowercase string is used in the "includes" method
*/

//let samplearray4 = countries.filter(function (country) {
//return country.toLowerCase().includes("a");
//});

let samplearray5 = countries.map(function (country) {
  return country.toLowerCase();
});
let samplearray4 = samplearray5.filter(function (country) {
  return country.includes("a");
});
console.log(samplearray4);

/*
reduce()
-evaluates the element from left to right and returns/reduces the array into a single value
-syntax: let resultArray = arrayName.reduce(function (accumulator, currentValue) {
return expression/operation

})
- the 'accumulator' parameter in the function stores the result to every iteration of the loop
- how the reduce method works
    1. the first/result element in the array is stored in the accumulator parameter
    2. the second/next element in the array is stored in the currentValue parameter
    3. an operation is performed on the two elements
    4. the loop repeats step 1-3 until all the elements have been worked on
*/
console.log(numString);
let resultArray = numString.reduce(function (accumulator, currentValue) {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});
console.log(resultArray);

let resultArray2 = countries.reduce(function (accumulator, currentValue) {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});
console.log(resultArray2);
