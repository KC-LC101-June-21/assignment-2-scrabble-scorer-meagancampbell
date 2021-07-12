const input = require("readline-sync");
let word;
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
    let letterPoints = '';
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }
            console.log(letterPoints);
        }
    }
    console.log(letterPoints);
    return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    word = input.question(`Let's play some scrabble!\nEnter a word to score: `);
    console.log();
    return word;
};
console.log(`prompt ${word}`);

let simpleScore = function() {
   let points = 0;
   for (let i = 0; i < word.length; i++) {
      points += 1;
    }
    //console.log(`Score for '${word}': ${points}\n`);
    return points;
};

let vowelBonusScore = function() {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let points = 0;
  let vowelPoints = 0;
  let vowelBonusScore = 0;
  word = word.toUpperCase();
  vowelSplit = word.split('');
   for (let i = 0; i < vowelSplit.length; i++) {
     //console.log(vowelSplit);
     for (let j = 0; j < vowels.length; j++) {
      if (vowelSplit[i] === vowels[j]) {
        vowelPoints = vowelPoints + 3;
        console.log(vowelSplit[i]);
        continue
      }
    }
  } 
  for (let k = 0; k < word.length; k++) {
        points += 1;
        }
  points = points + vowelPoints -1 ;
  return points;
};
  


let scrabbleScore = function() {
   //word = word.toUpperCase();
    let scrabblePoints = 0;
    for (let i = 0; i < word.length; i++) {
     for (const letter in newPointStructure) {
      if (word[i].includes(letter)) {
        scrabblePoints += Number(newPointStructure[letter]);
      }
		 }
	  }
  //console.log(`Points for '${word}': ${scrabblePoints}\n`);
	return scrabblePoints;
}
const scoringAlgorithms = [
{
  name:'Simple Score',
  number:'0',
  description:'0 - One point per character',
  scoringFunction: simpleScore
},
 {
  name:'Vowel Bonus Score',
  number:'1',
  description:'1 - Vowels are worth 3 points',
  scoringFunction:vowelBonusScore 
},
{
  name:'Scrabble Score',
  number:'2',
  description:'2 - Uses scrabble point system',
  scoringFunction:scrabbleScore
}];

function scorerPrompt() {
   console.log(`Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system`)
   let num = input.question('Enter 0, 1, or 2: ')
   while (num > 2 || num < 0) {
      num = input.question('Incorrect input. Please select a scoring algorithm (0, 1, 2): ');
   }
   
   console.log(`Score for '${word}': `, scoringAlgorithms[num].scoringFunction(word));
};

function transform(object) {
    let newPointsObject = {};
    let keys = Object.keys(object)
    keys.forEach((key) => {
    let eachArray = object[key];
    eachArray.forEach((eaLetter) => {
      newPointsObject[eaLetter.toLowerCase()] = Number(key);
    }) 
  })
  return newPointsObject;
};
let newPointStructure = transform(oldPointStructure);

console.log('letter p: ', newPointStructure.p);
console.log('letter j: ', newPointStructure.j);
console.log('letter z: ', newPointStructure['z']);

function runProgram() {
  let word = initialPrompt();
  let = scorerPrompt(word, scoringAlgorithms);
  
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
