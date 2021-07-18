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

let word;

function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = '';
    
    for(let i = 0; i < word.length; i++) {
        
        for(const pointValue in oldPointStructure) {
            
            if(oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += (`Points for '${word[i]}': ${pointValue}\n`);
                letterPoints += (`\nPoints for '${word[i]}': ${pointValue}`);
            }
            
        }
    }
    return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function initialPrompt() {
    console.log(`Let's play some scrabble!\n `);
    word = input.question(`Enter a word to score: `);
    return word;
};

let simpleScore = function (word) {
    let points = 0;
    for(let i = 0; i < word.length; i++) {
        points += 1;
    }
    return (`Score for '${word}': ${points}\n`);
};


let vowelBonusScore = function(word) {
  let total = 0;
  for (let i = 0; i < word.length; i++){
    let vowel = 'AEIOU'
    if (vowel.includes(word[i].toUpperCase())){
      total += 3;
    } else {
      total += 1;
    }
  }
  return total;
};

let scrabbleScore = function (word) {
    let scrabblePoints = 0;
    for(let i = 0; i < word.length; i++) {
        for(const letter in newPointStructure) {
            if(word[i].includes(letter)) {
                scrabblePoints += Number(newPointStructure[letter]);
            }
        }
    }
    return (`Points for '${word}': ${scrabblePoints}\n`);
}

const scoringAlgorithms = [
    {
        name: 'Simple Score',
        number: '0',
        description: '0 - One point per character.',
        scoringFunction: simpleScore
},
    {
        name: 'Vowel Bonus Score',
        number: '1',
        description: '1 - Vowels are worth 3 points.',
        scoringFunction: vowelBonusScore
},
    {
        name: 'Scrabble Score',
        number: '2',
        description: '2 - Uses scrabble point system.',
        scoringFunction: scrabbleScore
}];

function scorerPrompt() {
    console.log(`Which scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system`)
    let num = input.question('Enter 0, 1, or 2: ')
    while(num > 2 || num < 0) {
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

// console.log('letter p: ', newPointStructure.p);
// console.log('letter j: ', newPointStructure.j);
// console.log('the word is pineapple: ', oldScrabbleScorer('pineapple'));
// console.log('Pineapple oldScrabbleScorer ' + (sum = 3+1+1+1+1+3+3+1+1+1));
function runProgram() {
    initialPrompt();
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
