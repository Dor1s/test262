throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var gen = async function *() {
  callCount += 1;
  (function() {
      var yield;
      throw new Test262Error();
    }())
};
var iter = gen();
assert.sameValue(callCount, 1);