class C {
  *['a']() {
    yield 1;
    yield 2;
  }
}
assert.sameValue(
  Object.keys(C.prototype).length,
  0,
  "The value of `Object.keys(C.prototype).length` is `0`"
);
assert(
  compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a']),
  "`compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a'])` returns `true`"
);