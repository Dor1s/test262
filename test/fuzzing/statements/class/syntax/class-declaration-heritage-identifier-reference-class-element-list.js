class A {}
class B extends A {
  method() {}
  static method() {}
  ;
}
assert.sameValue(typeof B, "function");
assert.sameValue(typeof B.prototype.method, "function");
assert.sameValue(typeof B.method, "function");