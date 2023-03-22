import { readFileSync } from 'fs';

const cleanupCalculator = (filename: string, part: number): number => {
    const formattedData = readFileSync(filename, 'utf-8').split("\n").map((line) => {
        const [minA, maxA, minB, maxB] = line.split(/[-,]/).map(stringNum => Number(stringNum))
        return [[minA, maxA], [minB, maxB]];
    });
    
    var score = 0
    formattedData.map(pairs => {
        const minA = pairs[0][0]
        const minB = pairs[1][0]
        const maxA = pairs[0][1]
        const maxB = pairs[1][1]
        
        if (part === 2 && (minA <= maxB) && (maxA >= minB)) {
            score++
        }
        
        if (part === 1 && ((minB >= minA && maxB <= maxA) || (minA >= minB && maxA <= maxB))) {
            score++
        }
        
    })    
    return score
}

module.exports = cleanupCalculator