// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

//'OY', 'AY','EY'
const vowelStructure ={
  'A': 3, 'E': 3, 'I': 3, 'O': 3, 'U':3
};
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let word = '';
let userInput = '';
//let userWord1 = initialPrompt();
let userWord2 = '';
let simpleScrabbleScorer= function() {

};

let vowelScrabbleScorer = function(){

};
let scoreTotal = 0;


let methodSelected = 'Scoring Algorithm Selected:';

function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return letterPoints;
}

function initialPrompt(){
  word = console.log(input.question("Let's play some scrabble!" + "\n" + "Enter a word: "));
  //userWord1 = word;
} 
userInput = word.toUpperCase();

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScrabbleScorer(word),
}, 
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scorerFunction: vowelScrabbleScorer(word),
},
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    //scorerFunction: scrabbleScore(userWord),
    scorerFunction: oldScrabbleScorer(word),
  }
];


let scorerPrompt = function() {
    let num = input.question('Which scoring algorithm would you like to use?' + '\n' + '0 - Simple Soring Method: One point per character' + '\n' + '1 - Vowel Bonus Scoring Method: Vowels are worth 3 points' + '\n' + '2 - Traditional Scrabble Soring Method: Uses scrabble point system' + '\n' + '\n' + 'Enter 0, 1, or 2' + '\n');
    while (userInput) {
        if (userInput === '0') {
            console.log(`${methodSelected} Simple Score`);
            //console.log(`Scoring Result:` scoringAlgorithms[0].scorerFunction(word));
            break;
        } else if (userInput === '1') {
            console.log(`${methodSelected} Vowel Bonus`);
            //console.log(`Scoring Result:` scoringAlgorithms[1].scorerFunction(word));
        }
        if (num == '2') {
            console.log(`${methodSelected} Scrabble Score`);
            break;
        } else if (num > 2 || num == NaN) {
            console.log('Incorrect selection. Choose again.');
            return scorerPrompt();
            break;
        }

    }

}
//console.log(word);

// JavaScript = 24 points using Scrabble, 10 using Simple Score, and 16 using Bonus Vowels.
// Scrabble = 14 points using Scrabble, 8 using Simple Score, and 12 using Bonus Vowels.
// Zox = 19 points using Scrabble, 3 using Simple Score, and 5 using Bonus Vowels.


// function to change input into letterPoints
function points() {
  let letterPoints = 0;
  i = letterPoints;
}

// function scoreTotal(){
//   //return scoreTotal = scoreTotal + Number(pointValue); 
// }


//simpleScore
function simpleScore(word) {
  let userInput  = word.length;
    let letterPoints = "";
    for (let i = 0; i < word.length; i++) {
    }
  return simpleScore;
}

// let userWord = Object.fromEntries(
//   Object.key(onePointStructure).map(entry => entry[i]* 1]);
//   let sum = entry[i]*1;
//   console.log(sum);
// );


//vowelScore 
let vowelBonusScore = function(word){
  
  vowel = 3;
  // count the vowels in the word vowelNumber = 
  for (i = 0; i < word.length; i++) {
    sum += word.length + vowel[i][word[i]]
  }
};

//scrabbleScoring 

let scrabbleScore;


// vowelBonus = (word) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   score = 0;
//   word = word.toLowerCase();
//   for (let letter in word) {}
//   vowels.forEach((value) => {
//     if (letter === value) {
//       score += 3;
//     } else if (letter !== value) {
//       score += 1;
//     }
//   });
//   return score;


//const scoringAlgorithms = [simpleScore, vowelScore, scrabbleScore];

//Create a transform() function that takes in the oldPointStructure object and returns a newPointStructure object.

function transform(object) {
  const newPointStructure = transform(oldPointStructure);
};

let newPointStructure;

// function transform(obj) {
//   const newScoreKey = {};
//   for (var key in oldScoreKey) {
//     for (let i = 0; i < oldScoreKey[key].length; i++) {
//       newScoreKey[oldScoreKey[key][i].toLowerCase()] = +key;
//     }
//   }
//   return newScoreKey;
// }

function runProgram() {
   initialPrompt();
   scorerPrompt();
   simpleScore();
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	 runProgram: runProgram,
	 scorerPrompt: scorerPrompt
};

