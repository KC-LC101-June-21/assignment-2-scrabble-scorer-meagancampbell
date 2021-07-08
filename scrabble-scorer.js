// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
var word = "";
let userWord = "";
let points = 0;

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

let newPointsObject = {};
let newPointStructure = transform(oldPointStructure);
// Code your transform function here:
function transform(oldPointStructure) {
    for (item in oldPointStructure) {
        for (let i = 0; i < oldPointStructure[item].length; i++) {
            let newValue = oldPointStructure[item][i];
            newPointsObject[newValue.toLowerCase() ] = Number(item);
        }
    }
    return newPointsObject;
};
//code oldScrabbleScorer
function oldScrabbleScorer() {
    word = "word";
    word = word.toUpperCase();
    let points = "";
    for (let i = 0; i < word.length; i++) {
        for (const pointValue in oldPointStructure) {
            if (oldPointStructure[pointValue].includes(word[i])) {
                points += `Points for '${word[i]}': ${parseInt(points)} \n`

            }

        }
    }
    return points;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    let word = input.question(`Let's play some scrabble!\nPlease enter a word to score: `);
    let letters = /^[A-Za-z]+$/;
   
  return word;
};

let simpleScore = function() {
  let points = 0;
  //word = word.toUpperCase();
  for (let i=0; i < word.length; i++) {
    points++;
  }
  return points;
};

let bonusTally = 0;
const vowelBonus = ['A', 'E', 'I', 'O', 'U'];

let vowelBonusScore = function() {
  //TODO: case insensative
  word = "word";
  //word = word.toUpperCase(); 
  for (let i = 0; i < word.length; i++) {
  //if vowel
  if (word[i] === vowelBonus[0] || word[i] === vowelBonus[1] || word[i] === vowelBonus[2]|| word[i] === vowelBonus[3] || word[i] === vowelBonus[4]) {
    bonusTally = bonusTally + 1;
    }else{
    points = points + 1;
      } 
    }
  let bonuses = (bonusTally * 3);
  points += points + bonuses;
  return vowelBonusScore;
}

let scrabbleScore = function() {
    let points = 0;
    for (let i = 0; i < word.length; i++) {
    points = Number(newPointStructure[word[i]]);
    }
    return points;
};

const scoringAlgorithms = [simpleScore(), vowelBonusScore(), scrabbleScore()];

let scoringObjects= [{
        name: "Simple Score",
        description: "Each letter is worth 1 point.",
        scoringFunction: simpleScore(word)
    },
    {
        name: "Vowel Bonus Score",
        description: "Vowels are 3 pts, Consonants are 1 pt.",
        scoringFunction: vowelBonusScore(word)
    },
    {
        name: "Scrabble Score",
        description: "The traditional scoring algorithm.",
        scoringFunction: scrabbleScore(word)
    }
];




function scorerPrompt() {
    let simpleMethod = "0 - Simple Scoring Method: One point per character";
    let vowelMethod = "1 - Vowel Bonus Scoring Method: Vowels are worth 3 points";
    let traditionalMethod = "2 - Traditional Scrabble Soring Method: Uses scrabble point system";
    console.log(`Which scoring algorithm would you like to use? \n ${simpleMethod} \n ${vowelMethod} \n ${traditionalMethod} `);
    let scoringMethod = (input.question("Enter 0, 1, or 2 "));
    let number = scoringMethod;
    console.log("scoringMethod");
      if (number == 0) {
      simpleScore();
      } 
        // console.log("Scoring Choice: " + scoringAlgorithms[0].scoringFunction.name);
        // console.log();
        // console.log(`Is worth ${simpleScore(word, newPointStructure)} points`);
      if (number == 1) {
      vowelBonusScore();
      } 
        // console.log("Scoring Choice: " + scoringAlgorithms[1].scoringFunction.name);
        // console.log();
        // console.log(`Is worth ${vowelBonusScore(word, newPointStructure)} points`);

      if (number == 2) {
      scrabbleScore();
      }
        // console.log("Scoring Choice: " + scoringAlgorithms[2].scoringFunction.name);
        // console.log();
        // console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);

      if (number > 2 || number == NaN){ 
      console.log("Incorrect selection. Choose again.");
      
      }
    console.log("Nothing is working");
};




console.log("letter a: ", newPointStructure.a);
console.log("letter j: ", newPointStructure.j);
//console.log("letter z: ", newPointStructure["z"]);

function runProgram() {
    initialPrompt();
    oldScrabbleScorer();
    scorerPrompt();
    transform();
    simpleScore();
    vowelBonusScore();
    scrabbleScore();
    //scoreTotal();
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