var A = class B {
  method() {}
  static method() {}
  ;
}
assert.sameValue(typeof A, "function");
assert.sameValue(typeof A.prototype.method, "function");
assert.sameValue(typeof A.method, "function");
assert.sameValue(typeof B, "undefined");