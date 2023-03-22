const day1 = require('../day-1/index');


describe("Day 1 Tests", () => {
    const cases = [[1, './day-1/simple-example.txt', 24000], [1, './day-1/example.txt', 70374], [2, './day-1/simple-example.txt', 45000], [2, './day-1/example.txt', 204610]];

    test.each(cases)(
        "Part %p using %s example, returns %p", (part, filename, expectedResult) => {
            let result
            if (part === 1) {
                result = day1.calculateCalories(filename)[0]
            } else {
                result = day1.findTopThree(filename)
            }
            expect(result).toEqual(expectedResult);
        }
    );
});
