/**
 * Created by GTX on 1.11.2016 г..
 */
describe("Test isSymmetric(arr)", function () {

    it("asd", function() {
        let value = mathEnforcer.addFive(5);

        expect(value).to.be.equal(10);
    });

    it("asd", function() {
        let value = mathEnforcer.addFive(-5);

        expect(value).to.be.equal(0);
    });

    it("asd", function() {
        let value = mathEnforcer.addFive(5.3);

        expect(value).to.be.equal(5.3 + 5);
    });

    it("asd", function() {
        let value = mathEnforcer.addFive('pesho');

        expect(value).to.be.equal(undefined);
    });

    it("asd", function() {
        let value = mathEnforcer.subtractTen(5);

        expect(value).to.be.equal(-5);
    });

    it("asd", function() {
        let value = mathEnforcer.subtractTen(4.8);

        expect(value).to.be.equal(4.8 - 10);
    });

    it("asd", function() {
        let value = mathEnforcer.subtractTen(-3);

        expect(value).to.be.equal(-13);
    });

    it("asd", function() {
        let value = mathEnforcer.subtractTen('pesho');

        expect(value).to.be.equal(undefined);
    });

    it("asd", function() {
        let value = mathEnforcer.sum(5,4);

        expect(value).to.be.equal(9);
    });

    it("asd", function() {
        let value = mathEnforcer.sum(-5,4);

        expect(value).to.be.equal(-1);
    });

    it("asd", function() {
        let value = mathEnforcer.sum(2.4,1.1);

        expect(value).to.be.equal(2.4 + 1.1);
    });

    it("asd", function() {
        let value = mathEnforcer.sum('pesho',4);

        expect(value).to.be.equal(undefined);
    });

    it("asd", function() {
        let value = mathEnforcer.sum(4,'pesho');

        expect(value).to.be.equal(undefined);
    });


});