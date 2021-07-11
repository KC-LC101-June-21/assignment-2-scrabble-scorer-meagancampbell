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
function initialPrompt(word) {
    word = input.question(`Let's play some scrabble!\nEnter a word to score: `);
    console.log();
    return word;
};
console.log(`prompt ${word}`);

let simpleScore = function(word) {
   let points = 0;
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      points += 1;
    }
    //console.log(`Score for '${word}': ${points}\n`);
    return points;
};

let vowelBonusScore = function(word) {
        const vowels = ['A', 'E', 'I', 'O', 'U'];
        let points = 0;
        word = word.toUpperCase().split('');
        //console.log(word);
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                points += 3;

            } else {
                points += 1;
            }
            
        }
        return vowelBonusScore;
        return points;
};

let scrabbleScore = function(word) {
   word = word.toUpperCase();
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


function scorerPrompt(word, scoringAlgorithms) {
    let num = input.question(`Which scoring algorithm would you like to use?\n${scoringAlgorithms[0].name}, ${scoringAlgorithms[0].description}\n${scoringAlgorithms[1].name}, ${scoringAlgorithms[1].description}\n${scoringAlgorithms[2].name}, ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
    if (num == 0) {
        return simpleScore();
        console.log(`Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`);
    } else if (num == 1) {
        return vowelBonusScore(); 
        console.log(`Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`);
    } else if (num == 2) {
        return scrabbleScore;
        console.log(`Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`);
    } else{
      alert('Incorrect input');
      scorerPrompt(word, scoringAlgorithms);
    }

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
