class C {
  eval() {
    return 1;
  }
  arguments() {
    return 2;
  }
  static eval() {
    return 3;
  }
  static arguments() {
    return 4;
  }
};
assert.sameValue(new C().eval(), 1, "`new C().eval()` returns `1`");
assert.sameValue(new C().arguments(), 2, "`new C().arguments()` returns `2`");
assert.sameValue(C.eval(), 3, "`C.eval()` returns `3`");
assert.sameValue(C.arguments(), 4, "`C.arguments()` returns `4`");