class B {
  method() {
    return 1;
  }
  get x() {
    return 2;
  }
}
class C extends B {
  set y(v) {
    assert.sameValue(v, 3, "The value of `v` is `3`");
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    assert.sameValue(super.method(), 1, "`super.method()` returns `1`");
  }
}
assert.sameValue(new C().y = 3, 3, "`new C().y = 3` is `3`");