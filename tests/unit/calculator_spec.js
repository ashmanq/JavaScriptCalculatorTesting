var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it can add numbers', function() {
    // We manually allocate the previous total then add 4 to see if the
    // running total shows the added result
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  });

  it('it can subtract numbers', function() {
    // We manually allocate the previous total then subtract 3 to demonstrate
    // total shows the subtracted result
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it('it can multiply numbers', function() {
    // Same as before but for multiplying numbers
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

});
