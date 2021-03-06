class C {
  get eval() {
    return 1;
  }
  get arguments() {
    return 2;
  }
  static get eval() {
    return 3;
  }
  static get arguments() {
    return 4;
  }
};
assert.sameValue(new C().eval, 1, "The value of `new C().eval` is `1`");
assert.sameValue(new C().arguments, 2, "The value of `new C().arguments` is `2`");
assert.sameValue(C.eval, 3, "The value of `C.eval` is `3`");
assert.sameValue(C.arguments, 4, "The value of `C.arguments` is `4`");