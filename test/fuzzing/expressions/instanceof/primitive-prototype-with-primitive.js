Function.prototype.prototype = true;
var result = 0 instanceof Function.prototype;
assert.sameValue(result, false);