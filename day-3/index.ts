import { readFileSync } from 'fs';

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const rucksackReorganisation = (filename: string, part:number) => {
    const formattedData = readFileSync(filename, 'utf-8').split("\n")
    
    if (part === 1) {
        return formattedData.map(line => {
            const rucksackOne = line.substring(0, line.length/2)
            const rucksackTwo = line.substring(line.length/2, line.length)
            
            var score = 0
            let foundLetters: string[] = []
            for (const letter of rucksackOne) {
                if (rucksackTwo.includes(letter) && !foundLetters.includes(letter)) {                
                    score += letters.indexOf(letter)+1
                    foundLetters.push(letter)
                }
            }
            
            return score
        }).reduce((a, b) => a + b, 0)
    } else {
        let test = formattedData.splice(0,3)
                console.log(test, "DATA", formattedData)

    }
}

module.exports = rucksackReorganisation