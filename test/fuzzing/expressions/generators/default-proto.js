var g = function*() {};
var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
g.prototype = null;
assert.sameValue(Object.getPrototypeOf(g()), GeneratorPrototype);