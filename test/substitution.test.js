const substitution = require("../src/substitution");
const expect = require("chai").expect;
describe("substitution", () => {
    it("returns false if the substitution alphabet is not strictly equal to 26", () => {
        const actual = substitution("hello", "halo");
        expect(actual).to.be.false;
    });
    it("returns false if the substitution alphabet is not unique", () => {
        const actual = substitution("hello", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
    it("returns false if no substitution alphabet is provided", () => {
        const actual = substitution("hello");
        expect(actual).to.be.false;
    });
    it("encodes input according to substitution alphabet, if input has no spaces", () => {
        const actual = substitution("hello", "bcvghijklerwsazpqmnftuo#$%");
        const expected = "khwwz";
        expect(actual).to.equal(expected);

    });
    it("maintains space throughout while encoding", () => {
        const actual = substitution("hello world", "bcvghijklerwsazpqmnftuo#$%");
        const expected = "khwwz ozmwg";
        expect(actual).to.equal(expected);
    });
    it("decodes messages", () => {
        const actual = substitution("khwwz ozmwg", "bcvghijklerwsazpqmnftuo#$%", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const actual = substitution("Hello World", "bcvghijklerwsazpqmnftuo#$%");
        const expected = "khwwz ozmwg";
        expect(actual).to.equal(expected);
    });
});
//abcdefghijklmnopqrstuvwxyz!@#$%^&*
//bcvghijklerwsazpqmnftuo#$%
//abcdefghijklmnopqrstuvwxyz
