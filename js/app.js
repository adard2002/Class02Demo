'use strict';
//first things to do.
console.log('This is my About Me quiz.');


// prompt our user for data input 
var userName = prompt('What is your name?');
console.log(userName);

// Greet the user
alert('Hello and welcome to my About Me quiz ' + userName + '!');

// Question 1. Is rock my favorite music genre?
var musicNameCap = prompt('Is rock my favorite music genre?'); 
console.log(musicNameCap);
var musicName = musicNameCap.toLowerCase();
console.log(musicName);
  if (musicName === 'yes' || musicName === 'y') {
  alert('Correct! My favorite band is Hollywood Undead along with Theory of a Deadman and and many more!') 
  } else if
      (musicName === 'no' || musicName === 'n') {
    alert('Incorrect, my favorite band genre is rock! My most favorite band is Hollywood Undead along with many more such as Theory of a Deadman!')
  } else {
    alert('Oops! You entered an incorrect input! Please enter yes, no, y, or n.');
  }
  
// Question 2. Do I want to get a pet rabbit/bunny someday?
var bunnyNameCap = prompt('Do I want to get a pet rabbit/bunny someday?');
console.log(bunnyNameCap);
var bunnyName = bunnyNameCap.toLowerCase();
console.log(bunnyName);
  if (bunnyName === 'yes' || bunnyName === 'y') {
    alert('Correct! I do want to get a bunny someday!')
  } else if
      (bunnyName === 'no' || bunnyName === 'n') {
    alert('Incorrect, I do want to get a bunny someday!')
  } else {
    alert('Oops! You entered an incorrect input! Please enter yes, no, y, or n.')
  }

// Question 3. Do I play Video Games?
var gameNameCap = prompt('Do I play Video Games?');
console.log(gameNameCap);
var gameName = gameNameCap.toLowerCase();
console.log(gameName);
  if (bunnyName === 'yes' || bunnyName === 'y') {
    alert('Correct! I play Soulworker, Minecraft, Wizard101, and Osu!')
  } else if
      (gameName === 'no' || gameName === 'n') {
    alert('Incorrect, I have played Video Games ever since I could pick up a controller!')
  } else {
    alert('Oops you entered an incorrect input! Please enter yes, no, y, or n.')
  }

// Question 4. Do I hate spiders and arachnids?
var spiderNameCap = prompt('Do I hate spiders and arachnids?');
console.log(spiderNameCap);
var spiderName = spiderNameCap.toLowerCase();
console.log(spiderName);
  if (spiderName === 'yes' || spiderName === 'y') {
    alert('Incorrect! I love spiders, tarantulas, scorpions, etc! I have 2 tarantulas and 1 scorpion my uncle gave me on Christmas!')
  } else if (spiderName === 'no' || 'n') {
    alert('Correct! I love spiders, tarantulas, scorpions, etc! I have 2 tarantulas and 1 scorpion which my uncle gave me on Christmas!')
  } else {
    alert('Oops you entered an incorrect input! Please enter yes, no, y, or n.')
  }

// Question 5. Was my first console the Playstation 2?
var psNameCap = prompt('Was my first gaming console the Playstation 2?');
console.log(psNameCap);
var psName = psNameCap.toLowerCase();
console.log(psName);
  if (psName === 'yes' || psName === 'y') {
    alert('Correct! Castlevania and Spyro are a couple of my favorites along with some arcade games!')
  } else if (psName === 'no' || psName === 'n') {
    alert('Incorrect, my first gaming console was the Playstation 2! The Spyro and Castlevania games are a couple of my favorites along with some arcade games!')
  } else {
    alert('Oops you entered an incorrect input! Please enter yes, no, y, or n.')
  }

// Question 6. I'm thinking of a number between 1 and 10. Do you know what it is? You have 4 tries. (answer is going to be 7)

var correctNumber = 7
  for(var i = 0; i < 4; i++){
    var userGuess = prompt('I am thinking of a number between 1 and 10. Do you know what it is? You have 4 tries.');
    //console.log(i);
    if(userGuess < correctNumber){
      alert('The number you entered is less than the number I am thinking of. Please try again.');
      console.log(userGuess);
    } else if(userGuess > correctNumber){
      alert('The number you entered is greater than the number I am thinking of. Please try again.');
      console.log(userGuess);
    }
    else if (userGuess == correctNumber) {
      alert('Correct! The number I was thinking of was 7!');
      break;
    }
    if ((i === 3) && (userGuess !== correctNumber)){
      alert('Sorry the number I was thinking of was 7.')
    }
  }

// Question 7. Out of these bands which is my most favorite? 
var bandGuess = prompt('Out of these bands which are my most favorite?');
    console.log(bandGuess)
     var bandGuess = ['Hollywood Undead', 'Motionless in White', 'New Medicine', 'Theory of a Deadman', 'Marilyn Manson', 'Get Scared', 'Linkin Park', 'Korn', 'Falling in Reverse', 'My Darkest Days'];
    var a = bandGuess.indexOf('Hollywood Undead');
  