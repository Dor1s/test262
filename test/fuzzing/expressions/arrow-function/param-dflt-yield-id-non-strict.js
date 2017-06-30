throw "Test262: This statement should not be evaluated.";
var yield = 23;
var f, paramValue;
f = (x = yield) => { paramValue = x; };
f();
assert.sameValue(paramValue, 23);