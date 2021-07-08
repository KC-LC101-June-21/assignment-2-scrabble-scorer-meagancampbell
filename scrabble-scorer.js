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

function oldScrabbleScorer() {
    word = String(word);
    word = word.toUpperCase();
    let points = "";
    for (let i = 0; i < word.length; i++) {
        for (const pointValue in oldPointStructure) {
            if (oldPointStructure[pointValue].includes(word[i])) {
                points += `Points for '${word[i]}': ${pointValue} \n`

            }

        }
    }
    return points;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = "";

function initialPrompt(word) {
    console.log("Let's play some scrabble! + \n ");
    let letters = /^[A-Za-z]+$/;
    while (word.match(letters)) {
     let word = input.question("Please enter a word: ");
   }
  return word;
};

let simpleScore = function(word) {
  word = word.toUpperCase;
  let points = 0;
  for (let i=0; i < word.length; i++) {
    points++;
  }
  return points;
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase(); //.split("")
  let points = 0;
  let vowels = ["A", "E", "I", "O", "U"];
    for (let i = 0; i < word.length; i++) {
        if (word[i].includes(vowels).toLowerCase()) {
            points += 3;
        } else {
            points += 1;
        }
      return points;
    }
};

let scrabbleScore = function(word) {
    let points = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        points += Number(newPointStructure[word[i]]);
    }
    return points;
};
    

let scoringAlgorithms = [{
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
    let simpleMethod = "0 - Simple Soring Method: One point per character";
    let vowelMethod = "1 - Vowel Bonus Scoring Method: Vowels are worth 3 points";
    let traditionalMethod = "2 - Traditional Scrabble Soring Method: Uses scrabble point system";
    console.log(`Which scoring algorithm would you like to use? \n ${simpleMethod} \n ${vowelMethod} \n ${traditionalMethod} `);
    let enterScoringMethod = Number(input.question("Enter 0, 1, or 2  \n"));

    if (enterScoringMethod === 0) {
        return simpleScore;
        console.log("Scoring Choice: " + scoringAlgorithms[0].scoringFunction.name);
        console.log(word);
        console.log(`Is worth ${simpleScore(word, newPointStructure)} points`);
    }
    if (enterScoringMethod === 1) {
        return vowelBonusScore;
        console.log("Scoring Choice: " + scoringAlgorithms[1].scoringFunction.name);
        console.log(word);
        console.log(`Is worth ${vowelBonusScore(word, newPointStructure)} points`);
    }
    if (enterScoringMethod === 2) {
        return scrabbleScore;
        console.log("Scoring Choice: " + scoringAlgorithms[2].scoringFunction.name);
        console.log(word);
        console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);
    }
    if (enterScoringMethod > 2 || num == NaN) {
        console.log("Incorrect selection. Choose again.");
        return scorerPrompt();
    }
    return enterScoringMethod;
};



// let newPointsObject = {};

// function transform(oldPointStructure) {
//     for (item in oldPointStructure) {
//         //let letters = oldPointStructure[i].toLowerCase();
//         for (let i = 0; i < oldPointStructure[Number(item)].length; i++) {
//             //word = word.toLowerCase();
//             newPointsObject[oldPointStructure[Number(item)][i].toLowerCase() ] = Number(item);
//         }
//     }
//     return newPointsObject;
// };
function transform(oldPointStructure) {
    let newPointStructure = {};
    //let newPointStructure = oldPointStructure
  
    for (let i = 0; i < oldPointStructure[1].length; i++) {
      newPointStructure[`${oldPointStructure[1][i].toLowerCase()}`] = 1;
    }
    for (let i = 0; i < object[2].length; i++) {
      newPointStructure[`${oldPointStructure[2][i].toLowerCase()}`] = 2;
    }
    for (let i = 0; i < oldPointStructure[3].length; i++) {
      newPointStructure[`${oldPointStructure[3][i].toLowerCase()}`] = 3;
    }
    for (let i = 0; i < oldPointStructure[4].length; i++) {
      newPointStructure[`${oldPointStructure[4][i].toLowerCase()}`] = 4;
    }
    for (let i = 0; i < oldPointStructure[5].length; i++) {
      newPointStructure[`${oldPointStructure[5][i].toLowerCase()}`] = 5;
    }
    for (let i = 0; i < oldPointStructure[8].length; i++) {
      newPointStructure[`${oldPointStructure[8][i].toLowerCase()}`] = 8;
    }
    for (let i = 0; i < oldPointStructure[10].length; i++) {
      newPointStructure[`${oldPointStructure[10][i].toLowerCase()}`] = 10;
    }
    return newPointStructure;
}

let newPointStructure = transform(oldPointStructure);

//newPointStructure[" "] = 0;


console.log("letter a: ", newPointStructure.a);
console.log("letter j: ", newPointStructure.j);
console.log("letter z: ", newPointStructure["z"]);

function runProgram() {
    initialPrompt();
    let enterScoringMethod = scorerPrompt();
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