class B {
  method() {
    return 1;
  }
  get x() {
    return 2;
  }
}
class C extends B {
  method() {
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    return super.method();
  }
}
assert.sameValue(new C().method(), 1, "`new C().method()` returns `1`");