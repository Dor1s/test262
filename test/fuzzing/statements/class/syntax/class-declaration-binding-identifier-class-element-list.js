class A {
  method() {}
  static method() {}
  ;
}
assert.sameValue(typeof A, "function");
assert.sameValue(typeof A.prototype.method, "function");
assert.sameValue(typeof A.method, "function");