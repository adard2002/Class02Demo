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

// Question 4. Do I have a gaming PC?
var pcNameCap = prompt('Do I have a gaming PC?');
console.log(pcNameCap);
var pcName = pcNameCap.toLowerCase();
console.log(pcName);
  if (pcName === 'yes' || pcName === 'y') {
    alert('Incorrect, I have a very old laptop that can only run 3 games. And it can\'t run the game Soulworker.')
  } else if (pcName === 'no' || pcName === 'n') {
    alert('Correct! I have a very old laptop that can only run 3 games. Can\'t run the game Soulworker anymore.')
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







