class Foo extends null {}
assert.sameValue(Object.getPrototypeOf(Foo.prototype), null);
assert.sameValue(Object.getPrototypeOf(Foo.prototype.constructor), Function.prototype);
assert.sameValue(Foo, Foo.prototype.constructor);