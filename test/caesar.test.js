const caesar = require("../src/caesar");
const expect = require("chai").expect;
//abcdefghijklmnopqrstuvwxyz
describe("caeser", () => {
    it("shifts letters that do not require wrapping back in alphabet", () => {
        const expected = "jgnnq yqtnf";
        const actual = caesar("hello world", 2, true);
        expect(actual).to.equal(expected);
    });
    it("shifts letters that require wrapping if the shift is positive", () => {
        const actual = caesar("yellow", 4, true);
        const expected = "cippsa";
        expect(actual).to.equal(expected);
    });
    it("shifts letters that require wrapping if the shift is negative", () => {
        const actual = caesar("apple", -5, true);
        const expected = "vkkgz";
        expect(actual).to.equal(expected);
    });
    it("takes upper case letters to lower case", () => {
        const expected = "jgnnq yqtnf";
        const actual = caesar("Hello World", 2, true);
        expect(actual).to.equal(expected);
    });
    it("returns false if shift value is 0", () => {
        const actual = caesar("hello world", 0, true);
        expect(actual).to.be.false;
    });
    it("returns false if shift value is not present", () => {
        const actual = caesar("hello world");
        expect(actual).to.be.false;
    });
    it("returns false if shift value is < -25", () => {
        const actual = caesar("hello world", -26, true);
        expect(actual).to.be.false;
    });
    it("returns false if shift value is > 25", () => {
        const actual = caesar("hello world", 50, true);
        expect(actual).to.be.false;
    });
    it("decodes messages", () => {
        const expected = "hello world";
        const actual = caesar("jgnnq yqtnf", 2, false);
        expect(actual).to.equal(expected);
    });
    it("leaves spaces and other symbols as is while encoding and decoding", () => {
        const actual = caesar("h3ll0$", 2);
        const expected = "j3nn0$";
        expect(actual).to.equal(expected);
    })
});