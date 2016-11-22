/**
 * Created by GTX on 1.11.2016 г..
 */
describe("Test isSymmetric(arr)", function () {
    it("should return undefined if it is a number", function() {
        let value = isOddOrEven(15);
        expect(value).to.be.equal(undefined);
    });

    it("should return undefined if it is an object", function() {
        let value = isOddOrEven({name: 'asdksa'});
        expect(value).to.be.equal(undefined);
    });

    it("should return odd if {string} % 2 != 0", function() {
        let value = isOddOrEven('alibaba');
        expect(value).to.be.equal('odd');
    });
    it("should return even if {string} % 2 === 0", function() {
        let value = isOddOrEven('alibabab');
        expect(value).to.be.equal('even');
    });


});