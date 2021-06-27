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

const newPointStructure = {
  'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10,
};



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(){
  let word = input.question("Let's play some scrabble!" + "\n" + "Enter a word: ");
} 
// console.log(initialPrompt(word));
let num = [0, 1, 2];

// function scoringPrompt(){
//     let num = input.question('Which scoring algorithm would you like to use?'+ '\n'+ '0 - Simple Soring Method: One point per character' + '\n' + '1 - Vowel Bonus Scoring Method: Vowels are worth 3 points' + '\n' +  '2 - Traditional Scrabble Soring Method: Uses scrabble point system'+ '\n'+'\n'+'Enter 0, 1, or 2'+ '\n');
// }
let scoringAlgorithms;

let scorerPrompt = function(word) {
    let num = input.question('Which scoring algorithm would you like to use?' + '\n' + '0 - Simple Soring Method: One point per character' + '\n' + '1 - Vowel Bonus Scoring Method: Vowels are worth 3 points' + '\n' + '2 - Traditional Scrabble Soring Method: Uses scrabble point system' + '\n' + '\n' + 'Enter 0, 1, or 2' + '\n');
  if (num == 0) {
    console.log(`Scoring Algorithm Selected:  ${simpleScore}`);
    //console.log(`Scoring Result:` scoringAlgorithms[0].scorerFunction(word));
  } if (num == 1) {
    console.log(`Scoring Algorithm Selected: ${vowelBonusScore}`);
    //console.log(`Scoring Result:` scoringAlgorithms[1].scorerFunction(word));
  } if (num == 2) {
    console.log(`Scoring Algorithm Selected: ${newPointStructure}`);
    //console.log(`Scoring Result:` scoringAlgorithms[2].scorerFunction(word));
  } if (num > 2 || num == NaN) {
    return initialPrompt("Incorrect selection. Try Again. Let's play some scrabble!" + "\n" + "Enter a word: ");
  }

}





// JavaScript = 24 points using Scrabble, 10 using Simple Score, and 16 using Bonus Vowels.
// Scrabble = 14 points using Scrabble, 8 using Simple Score, and 12 using Bonus Vowels.
// Zox = 19 points using Scrabble, 3 using Simple Score, and 5 using Bonus Vowels.


let simpleScore = function(word) {
  return word.length;
  console.log(simpleScore(word));
  
}

// When y forms a diphthong—two vowel sounds joined in one syllable to form one speech sound, such as the "oy" in toy, "ay" in day, and "ey" in monkey—it is also regarded as a vowel.


let vowelBonusScore = function(){
  let vowelArray = ['A', 'E', 'I', 'O', 'U', 'OY', 'AY','EY']
  vowel = 3;
  // count the vowels in the word vowelNumber = 
  for (i = 0; i < word.length; i++) {
    sum += word.length + vowel[i][word[i]]
  }
};


let scrabbleScore = function(word) {
  sum = 0;
    for (i = 0; i < word.length; i++) {
        sum += newPointStructure[word[i]] || 0; // for unknown characters
    }
    return sum;
}

//const scoringAlgorithms = [simpleScore, vowelScore, scrabbleScore];



function transform() {
  newPointStructure = transform(oldPointStructure);
};



function runProgram() {
   initialPrompt();
   scorerPrompt();
   
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

