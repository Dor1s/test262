var other = $262.createRealm().global;
var g = other.eval('(0, function*() {})');
var GeneratorPrototype = Object.getPrototypeOf(g.prototype);
g.prototype = null;
var instance;
instance = g();
assert.sameValue(Object.getPrototypeOf(instance), GeneratorPrototype);