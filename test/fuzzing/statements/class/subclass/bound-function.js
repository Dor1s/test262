var bound = function() {}.bind();
bound.prototype = {};
class C extends bound {}
assert.sameValue(Object.getPrototypeOf(new C()), C.prototype);