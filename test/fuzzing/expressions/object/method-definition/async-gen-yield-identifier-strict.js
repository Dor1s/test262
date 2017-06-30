throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var gen = {
  async *method() {
    callCount += 1;
    (function() {
        var yield;
        throw new Test262Error();
      }())
  }
}.method;
var iter = gen();
assert.sameValue(callCount, 1);