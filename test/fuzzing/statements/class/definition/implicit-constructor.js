class C {}
var c = new C();
assert.sameValue(
    Object.getPrototypeOf(c),
    C.prototype,
    "`Object.getPrototypeOf(c)` returns `C.prototype`"
);