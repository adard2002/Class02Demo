'use strict';
//first things to do.
console.log('This is the app.js, connected to the index.');


// prompt our user for data input 
var userName = prompt('What is your name?');
console.log(userName);


// Greet the user
alert('Hello ' + userName);


// Validate user input.
var toLowerCase = userName.toLowerCase();
console.log(toLowerCase);


// Validate the user input using conditional logic using strict equals.
// if(condition){do something}else{do something else}

if(toLowerCase === 'craig' || toLowerCase === 'bob') {// false
  // will not run
  alert('Welcome back to my page, ' + userName);
  // do this
} else {
  alert('Welcome new user to my page.');
}


// create an empty array
var emptyArray = [];
// create an array full of quiz answers. no possible way to start at 1
// array index     0   1   2   3   4
var quizAnswer = ['b','c','c','c','a'];
console.log(quizAnswer);

// nested array          0           1              2
var nestedArray = [['yes', 'y'],['no', 'n'],['maybe', 'maybe not', 'hello']];
//                    0     1      0    1       0           1         2

// multiline array
var nestedArray = [
  ['yes','y'],
  ['no', 'n'],
  ['maybe', 'maybe not', 'hello']
];

// we don't always have the same data types in our arrays
var mixedDataTypes = [[],'yes',10,true,false];


