import { readFileSync } from 'fs';

const calculateCalories = (filename: string): number[] => {
    const contents = readFileSync(filename, 'utf-8')
    const result = contents.split("\n\n")
        .map(str => str.split("\n"))
        .map(arr => arr.reduce((a,b) => Number(a) + Number(b), 0))
        .sort((a,b) => b - a)
        .slice(0,3)
  
    return result

}

const findTopThree = (fileName: string): number => {
    return calculateCalories(fileName).reduce((a,b) => a + b, 0)
}

module.exports = { calculateCalories: calculateCalories, findTopThree: findTopThree }
