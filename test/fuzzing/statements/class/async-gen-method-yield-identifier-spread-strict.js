throw "Test262: This statement should not be evaluated.";
var callCount = 0;
class C { async *gen() {
    callCount += 1;
    return {
         ...(function() {
            var yield;
            throw new Test262Error();
         }()),
      }
}}
var gen = C.prototype.gen;
var iter = gen();
assert.sameValue(callCount, 1);