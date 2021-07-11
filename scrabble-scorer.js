const input = require("readline-sync");
let word = '';
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
    let letterPoints = "";
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }
            console.log(letterPoints);
        }
    }
    return letterPoints;
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    let word = (input.question(`Let's play some scrabble!\nPlease enter a word to score: `)).toUpperCase();
    console.log();
    return word;
    
};

let simpleScore = function (word) {
   let simplePoints = 0;
   for (let i = 0; i < word.length; i++) {
      simplePoints ++;
    }
    return simpleScore;
};

let vowelBonusScore = function (word) {
        const vowels = ['A', 'E', 'I', 'O', 'U'];
        word = word.toUpperCase().split('');
        let vowelPoints = 0;
        for (let i = 0; i < word.length; i++) {
            if (word.includes(vowels[i])) {
                vowelPoints = vowelPoints += 3;

            } else {
                vowelPoints = vowelPoints += 1;
            }
            return vowelBonusScore;
        }
};


let scrabbleScore = function (word) {
    word = word.toUpperCase();
    let scrabblePoints = 0;
    for (let i = 0; i < word.length; i++) {
        scrabblePoints += newPointStructure[word[i]];
    }
    return scrabbleScore;
    
};

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
};

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScoreObj];

function scorerPrompt(word) {
    let num = input.question(`Which scoring algorithm would you like to use?\n${scoringAlgorithms[0].name}, ${scoringAlgorithms[0].description}\n${scoringAlgorithms[1].name}, ${scoringAlgorithms[1].description}\n${scoringAlgorithms[2].name}, ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
    if (num = '0') {
        return `Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`;
    }
    if (num === '1') {
        return `Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`;
    }
    if (num === '2') {
        return `Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`;
    }
  return scorerPrompt;

};


function transform(oldPointStructure) {
    let newPointsObject = {};
    for (item in oldPointStructure) {
        for (let i = 0; i < oldPointStructure[item].length; i++) {
            let key = oldPointStructure[item][i];
            key = key.toLowerCase();
            newPointsObject[oldPointStructure[item][i].toLowerCase()] = Number(item);
        }
    }
    return newPointsObject;
};

let newPointStructure = transform(oldPointStructure);

console.log("letter p: ", newPointStructure.p);
console.log("letter j: ", newPointStructure.j);
console.log("letter z: ", newPointStructure["z"]);

function runProgram() {
  let word = initialPrompt();
  scorerPrompt();
};

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
