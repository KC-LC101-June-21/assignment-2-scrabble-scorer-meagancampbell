// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
let word = " ";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
}


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble! Enter a word:");
   let word = input.question("Enter a word to score. ");
   
};


let simpleScore = function(word){
  //word = word.toUpperCase();
  letterPoints = 0;
};

let vowelBonusScore = function(word){
  //word = word.toUpperCase();
  let letterPoints = 0;
  let vowels = ["A", "E", "I", "O", "U"];
  for (let i = 0; i < word.length; i ++){
    if (vowels.includes(word[i])){
      letterPoints += 3;
    } else {
      letterPoints += 1;
    }
    return letterPoints;
  }
};


let scrabbleScore = function(word){
  //word = word.toUpperCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i ++){

  }
};

let scoringAlgorithms = [
  {
    name:"simpleScore",
    description:"Each letter is worth 1 point.",
    scoringFunction: simpleScore
},
{
  name: "vowelBonusScore",
  description:"Vowels are 3 pts, Consonants are 1 pt.",
  scoringFunction: vowelBonusScore
},
{
  name: "scrabbleScore",
  description:"The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}
];

let score;
function scorerPrompt() {
    let simpleMethod = "0 - Simple Soring Method: One point per character";
    let vowelMethod = "1 - Vowel Bonus Scoring Method: Vowels are worth 3 points";
    let traditionalMethod = "2 - Traditional Scrabble Soring Method: Uses scrabble point system";
    console.log(`Which scoring algorithm would you like to use? \n ${simpleMethod} \n ${vowelMethod} \n ${traditionalMethod} `);
    let enterScoringMethod = input.question("Enter 0, 1, or 2  ");
    
    if (enterScoringMethod === '0') {
        return simpleScore;
        console.log("Scoring Result: " + scoringAlgorithms[0].scoringFunction(word));
        //break;
    }
    if (enterScoringMethod === '1') {
        return vowelBonusScore;
        console.log("Scoring Result: " + scoringAlgorithms[1].scoringFunction(word));
        //break;
    }
    if (enterScoringMethod == '2') {
        return scrabbleScore;
        console.log("Scoring Result: " + scoringAlgorithms[2].scoringFunction(word));
        //break;
    } if (enterScoringMethod > '2' || num == NaN) {
        console.log("Incorrect selection. Choose again.");
        return scorerPrompt();
        //break;
    }
}


let transform = function(obj) {
  let newPointStructure = {
    //empty
  }
  for (item in oldPointStructure ){
    let newItem = oldPointStructure[item];
    for (i = 0; i < newItem.length; i ++){
      let word = newItem.toUpperCase();
      newPointStructure[word] = Number(item);
  }
  }
  return newPointStructure;

};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   oldScrabbleScorer();
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

