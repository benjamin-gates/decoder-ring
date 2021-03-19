
const polybius = require("../src/polybius");
const expect = require("chai").expect;
describe("polybius", () => {
    it("has an output that is a string while encoding", () => {
        const actual = polybius("abc", true);
        expect(actual).to.be.a('string');
    });
    it("encodes messages to a string of numbers", () => {
        const expected = "112131";
        const actual = polybius("abc", true);
        expect(actual).to.equal(expected);
    });
    it("maintains spaces throughout while encoding", () => {
        const expected = "112131 415112";
        const actual = polybius("abc def", true);
        expect(actual).to.equal(expected);
    });
    it("can ignore capital letters while encoding", () => {
        const expected = "112131";
        const actual = polybius("ABC", true);
        expect(actual).to.equal(expected);
    });
    it("can decode the 'happy path'", () => {
        const expected = "abc";
        const actual = polybius("112131", false);
        expect(actual).to.equal(expected);
    });
    it("can decode a message that contains spaces", () => {
        const expected = "abc def";
        const actual = polybius("112131 415112", false);
        expect(actual).to.equal(expected);
    });
    it("when decoding both 'i' and 'j' can be shown", () => {
        const expected = "d(i/j)ll p(i/j)ckle";
        const actual = polybius("41421313 534231521351", false);
        expect(actual).to.equal(expected);
    });
    it("when decoding, the number characters in the string, excluding spaces, should be even, otherwise it returns false", () => {
        const actual = polybius("41421313 53423152135", false);
        expect(actual).to.be.false;
    });
});