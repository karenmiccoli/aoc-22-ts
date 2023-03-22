const calculate = require(".");

describe("Day 7 Tests", () => {
    const cases = [
        [1, './day-7/simple-example.txt', 95437],  
        [1, './day-7/example.txt', 1449447], 
        // [2, './day-7/simple-example.txt', 24933642], 
        // [2, './day-7/example.txt', 8679207]
];

    test.each(cases)(
        "Part %p using %s example, returns %p", (part, filename, expectedResult) => {
            let result = calculate(filename, part)
            expect(result).toEqual(expectedResult);
        }
    );
});
