class Fn extends Function {}
var fn = new Fn('a', 'return a * 2');
assert.sameValue(fn(42), 84);