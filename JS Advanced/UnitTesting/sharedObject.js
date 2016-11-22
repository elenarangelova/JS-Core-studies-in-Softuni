/**
 * Created by GTX on 1.11.2016 г..
 */
describe("shared object test", function () {

    //changeName tests

    it("asd", function() {
        sharedObject.changeName('pesho');

        expect($('#name').val()).to.be.equal('pesho');
        expect(sharedObject.name).to.be.equal('pesho');
    });

    it("asd", function() {
        let valueBefore = $('#name').val();
        let propBefore = sharedObject.name;
        sharedObject.changeName('');


        expect($('#name').val()).to.be.equal(valueBefore);
        expect(sharedObject.name).to.be.equal(propBefore);
    });

    it("asd", function() {
        let valueBefore = $('#name').val();
        let propBefore = sharedObject.name;
        sharedObject.changeName(4);


        expect($('#name').val()).to.be.equal(valueBefore);
        expect(sharedObject.name).to.be.equal(propBefore);
    });

    //changeIncome tests

    it("asd", function() {
        sharedObject.changeIncome(500);

        expect($('#income').val()).to.be.equal('500');
        expect(sharedObject.income).to.be.equal(500);
    });



    it("asd", function() {
        let beforeVal = $('#income').val();
        let beforeProp = sharedObject.income;
        sharedObject.changeIncome(-500);

        expect($('#income').val()).to.be.equal(beforeVal);
        expect(sharedObject.income).to.be.equal(beforeProp);
    });

    it("asd", function() {
        let smth = sharedObject.income = 100;
        sharedObject.changeIncome(0);


        expect(sharedObject.income).to.be.equal(100);
    });

    it("asd", function() {
        let beforeVal = $('#income').val();
        let beforeProp = sharedObject.income;
        sharedObject.changeIncome(-50.3);

        expect($('#income').val()).to.be.equal(beforeVal);
        expect(sharedObject.income).to.be.equal(beforeProp);
    });

    it("asd", function() {
        let beforeVal = $('#income').val();
        let beforeProp = sharedObject.income;
        sharedObject.changeIncome(5.4);

        expect($('#income').val()).to.be.equal(beforeVal);
        expect(sharedObject.income).to.be.equal(beforeProp);
    });

    it("asd", function() {
        let beforeVal = $('#income').val();
        let beforeProp = sharedObject.income;
        sharedObject.changeIncome('500');

        expect($('#income').val()).to.be.equal(beforeVal);
        expect(sharedObject.income).to.be.equal(beforeProp);
    });

    //updateName tests
    it("asd", function() {
        let propBefore = sharedObject.name;
        $('#name').val('');

        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal(propBefore);

    });

    it("asd", function() {
        let propBefore = sharedObject.name;
        $('#name').val(undefined);

        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal(propBefore);

    });

    it("asd", function() {
        let propBefore = sharedObject.name;
        $('#name').val(null);

        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal(propBefore);

    });

    it("asd", function() {
        let propBefore = sharedObject.name;
        $('#name').val(5);

        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal(propBefore);

    });

    it("asd", function() {

        $('#name').val('pesho');

        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('pesho');

    });



    //updateIncome tests

    it("asd", function() {
        let beforeProp = sharedObject.income;
        $('#income').val(NaN);

        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(beforeProp);

    });

    it("asd", function() {
        let beforeProp = sharedObject.income;
        $('#income').val(5);

        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(5);

    });


    it("asd", function() {
        let beforeProp = sharedObject.income;
        $('#income').val(-5);

        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(beforeProp);

    });



    it("asd", function() {
        let beforeProp = sharedObject.income;
        $('#income').val(undefined);

        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(beforeProp);

    });

});
