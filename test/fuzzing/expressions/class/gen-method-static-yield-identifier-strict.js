throw "Test262: This statement should not be evaluated.";
var callCount = 0;
var C = class { static *gen() {
    callCount += 1;
    (function() {
        var yield;
        throw new Test262Error();
      }())
}}
var gen = C.gen;
var iter = gen();
assert.sameValue(callCount, 1);