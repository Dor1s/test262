throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var gen = {
  *method() {
    callCount += 1;
    return {
         ...(function() {
            var yield;
            throw new Test262Error();
         }()),
      }
  }
}.method;
var iter = gen();
assert.sameValue(callCount, 1);