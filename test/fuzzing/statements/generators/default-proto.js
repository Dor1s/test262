function* g() {}
var GeneratorPrototype = Object.getPrototypeOf(g).prototype;
g.prototype = null;
assert.sameValue(Object.getPrototypeOf(g()), GeneratorPrototype);