'use strict';
//first things to do.
console.log('This is my About Me quiz.');

// points
var userPoints = 0;
var questions = ['Is rock my favorite music genre?', 'Do I want to get a pet rabbit/bunny someday?', 'Do I play Video Games?', 'Do I hate spiders and arachnids?', 'Was my first gaming console the Playstation 2?'];
var correctAnswers = ['Y','Y','Y','N','Y'];
var wrongAnswers = ['N', 'N', 'N', 'Y', 'N']

// prompt our user for data input 
var userName = prompt('What is your name?');
console.log(userName);

// Greet the user
alert('Hello and welcome to my About Me quiz ' + userName + '!');

// Question 1. Is rock my favorite music genre?

function askQuestion() {
  var i = 0;
  for (i=0; i<4; i++){
    var input = prompt(questions[i]); 
    console.log(input);
    input = input.toUpperCase();
    input = input.substring(0, 1);
    console.log(input);
    if (input === correctAnswers[i]) {
      alert('That\'s Correct!');
      userPoints = userPoints + 1;
      console.log('This is the point total ', userPoints);}
    else if (input === wrongAnswers[i]) {
      alert('That\'s Incorrect!');
      console.log('This is the point total ', userPoints);
    } else {
      alert('Oops! You entered an incorrect input! Please enter yes, no, y, or n.');
    }
  }
}
    
askQuestion();

// Question 6. I'm thinking of a number between 1 and 10. Do you know what it is? You have 4 tries. (answer is going to be 7)
var correctNumber = 7
  for(var i = 0; i < 4; i++){
    var userGuess = prompt('I am thinking of a number between 1 and 10. Do you know what it is? You have 4 tries.');
    //console.log(i);
    if(userGuess < correctNumber){
      console.log('This is the point total ', userPoints);
      alert('The number you entered is less than the number I am thinking of. Please try again.');
      console.log(userGuess);
    } else if(userGuess > correctNumber){
      console.log('This is the point total ', userPoints);
      alert('The number you entered is greater than the number I am thinking of. Please try again.');
      console.log(userGuess);
    }
    else if (userGuess == correctNumber) {
      userPoints = userPoints + 1;
      console.log('This is the point total ', userPoints);
      alert('Correct! The number I was thinking of was 7!');
      break;
    }
    if ((i === 3) && (userGuess !== correctNumber)){
      alert('Sorry the number I was thinking of was 7.')
    }
  }

// Question 7. Out of these bands which is my most favorite? 
    var correctBand = 'Hollywood Undead'
    for(var i = 0; i < 1; i++){
      var bandGuess = prompt('Out of these bands which is my most favorite?: Hollywood Undead, Motionless in White, New Medicine, Theory of a Deadman, Marilyn Manson, Get Scared, Linkin Park, Korn, Falling in Reverse, or My Darkest Days?');
      //console.log(i);
      if(bandGuess !== correctBand){
        console.log('This is the point total ', userPoints);
        alert('The band/person you entered is not my top favorite. My favorite band is Hollywood Undead!');
        console.log(userGuess);
      } else if (userGuess === correctBand) {
        userPoints = userPoints + 1;
        console.log('This is the point total ', userPoints);
        alert('Correct! The number I was thinking of was 7!');
        break;
      }
    }



// Quiz Score
alert('you have ' + userPoints + 'points out of 7, good job!');