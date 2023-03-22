const rucksackReorganisation = require(".");

describe("Day 3 Tests", () => {
    const cases = [
        // [1, './day-3/simple-example.txt', 157], [1, './day-3/example.txt', 8139], 
        [2, './day-3/simple-example.txt', 70], 
        // [2, './day-3/example.txt', 2668]
    ];

    test.each(cases)(
        "Part %p using %s example, returns %p", (part, filename, expectedResult) => {
            let result = rucksackReorganisation(filename, part)
            expect(result).toEqual(expectedResult);
        }
    );
});
