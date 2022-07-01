const {shuffleArray,  randomizedCopy} = require('./utils')
const {bots} = require('./data.js')



describe('shuffleArray should', () => {

    //didn't know how to get it from shuffleArray directly, see utils.js
    test(" be an array", () => {
        expect(Array.isArray(shuffleArray(bots))).toBeTruthy()
    });

    test("to be randomized", () => {
        expect(bots).not.toBe(shuffleArray(bots))
    });

    test("contain equal length", () => {
        expect(bots.length).toBe(shuffleArray(bots).length)
    });


})