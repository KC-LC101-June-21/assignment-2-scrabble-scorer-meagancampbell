const input = require("readline-sync");
let word = '';
let userWord = '';
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer (word) {
	word = word.toUpperCase();
	let letterPoints = '';
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${userWord[i]}': ${pointValue}\n`
		 }
      console.log(letterPoints);
	  }
	}
	return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    let userWord = input.question(`Let's play some scrabble!\nPlease enter a word to score: `);
  return userWord;
  console.log();
  console.log(userWord);
};
let simpleScore = function () {
   userWord = userWord.toUpperCase();
   let points = 0;
   for (let i = 0; i < word.length; i++) {
      points += 1;
    }
    return points;
}
let vowelBonusScore = function () {
   const vowels = ['A','E','I','O','U'];
   userWord = userWord.toUpperCase();
   let points = 0;
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(userWord[i])) {
         points += 3;
         continue
      }
      points += 1;
   }
   return points;
};

let scrabbleScore = function (word) {
   let points = 0;
   word = word.toLowerCase();

   for (let i = 0; i < word.length; i++) {
      points += newPointStructure[word[i]];
   }
   return points;
}

let simpleScoreObj = {
  name:'Simple Score',
  number:'0',
  description:'0 - One point per character',
  scoringFunction: simpleScore
};
let vowelBonusScoreObj = {
  name:'Vowel Bonus Score',
  number:'1',
  description:'1 - Vowels are worth 3 points',
  scoringFunction:vowelBonusScore 
};
let scrabbleScoreObj = {
  name:'Scrabble Score',
  number:'2',
  description:'2 - Uses scrabble point system',
  scoringFunction:scrabbleScore
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScoreObj];



function scorerPrompt(userWord) {
   console.log(`Which scoring algorithm would you like to use? \n${scoringAlgorithms[0].name}, ${scoringAlgorithms[0].description}\n${scoringAlgorithms[1].name}, ${scoringAlgorithms[1].description}\n${scoringAlgorithms[2].name}, ${scoringAlgorithms[2].description}`);
   let selection = input.question('Enter 0, 1, or 2: ');
   while (selection > 0 || selction < 3 ){
     if (selection === '0') {
        return  `Score for ${word}:${scoringAlgorithms[0].scoringFunction(word)}`;
      }
      if(selection === '1') {
        return  `Score for ${word}:${scoringAlgorithms[1].scoringFunction(word)}`;
      }
      if(selection === '2') {
        return  `Score for ${word}:${scoringAlgorithms[2].scoringFunction(word)}`;
      }
   
};

function transform(oldObject) {
   let newPointsObject = {}
   for (keys in oldObject) {
    for (let i = 0; i < oldObject[keys].length; i++) {
         newPointsObject[oldObject[keys][i].toLowerCase()] = Number(keys)
    }
  }
  return newPointsObject;
};
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}
/* Don't write any code below this line. And don't change these or your program will not run as expected */ 
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