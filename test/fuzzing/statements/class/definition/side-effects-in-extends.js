var calls = 0;
class C {}
class D extends (calls++, C) {}
assert.sameValue(calls, 1, "The value of `calls` is `1`");
assert.sameValue(typeof D, 'function', "`typeof D` is `'function'`");
assert.sameValue(Object.getPrototypeOf(D), C, "`Object.getPrototypeOf(D)` returns `C`");
assert.sameValue(
    C.prototype,
    Object.getPrototypeOf(D.prototype),
    "The value of `C.prototype` is `Object.getPrototypeOf(D.prototype)`"
);