class A {
  *[1]() {}
}
assert.sameValue(typeof A, "function");
assert.sameValue(typeof A.prototype[1], "function");