const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
    test('makes chains', function () {
        let mm = new MarkovMachine("the cat in the hat");

        expect(mm.chains).toEqual(new Map([
            ["the", ["cat", "hat"]],
            ["cat", ["in"]],
            ["in", ["the"]],
            ["hat", [null]]]));
    });

    test('choice picks from array', function () {
        expect(MarkovMachine.choice([10, 10, 10])).toEqual(10);
        expect([10, 20, 30]).toContain(MarkovMachine.choice([10, 20, 30]));
    });

    test('generates semi-predictable text', function () {
        let mm = new MarkovMachine("a b c");
        let text = mm.makeText();
        expect(["a b c", "b c", "c"]).toContain(text);
    });

