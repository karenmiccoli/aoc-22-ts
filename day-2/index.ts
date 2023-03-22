import { readFileSync } from 'fs';


interface StringArray {
    [index: string]: number;
}


const scoreCombinationsPartOne:StringArray = {
	"A X": 4, //Rock + Rock (1 + 3)
	"A Y": 8, //Rock + Paper (2 + 6)
	"A Z": 3, //Rock + Scissors (3 + 0)
	"B X": 1, //Paper + Rock (1 + 0)
	"B Y": 5, //Paper + Paper (2 + 3)
	"B Z": 9, //Paper + Scissors (3 + 6)
	"C X": 7, //Scissors + Rock (1 + 6)
	"C Y": 2, //Scissors + Paper (2 + 0)
	"C Z": 6, //Scissors + Scissors (3 + 3)
}

const scoreCombinationsPartTwo:StringArray = {
	"A X": 3, //Rock + Scissors (3 + 0)
	"A Y": 4, //Rock + Rock (1 + 3)
	"A Z": 8, //Rock + Paper (2 + 6)
	"B X": 1, //Paper + Rock (1 + 0)
	"B Y": 5, //Paper + Paper (2 + 3)
	"B Z": 9, //Paper + Scissors (3 + 6)
	"C X": 2, //Scissors + Paper (2 + 0)
	"C Y": 6, //Scissors + Scissors (3 + 3)
	"C Z": 7, //Scissors + Rock (1 + 6)
}

const calculateScore = (filename: string, part: number): number => {
    const contents = readFileSync(filename, 'utf-8').split("\n")
    
    let score = 0
    for (let index = 0; index < contents.length; index++) {
        if (part === 1) {
            score += scoreCombinationsPartOne[contents[index]]
        } else {
            score += scoreCombinationsPartTwo[contents[index]]
        }
    }
    
    return score
}


module.exports = calculateScore