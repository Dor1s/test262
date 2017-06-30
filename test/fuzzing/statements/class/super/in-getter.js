class B {
  method() {
    return 1;
  }
  get x() {
    return 2;
  }
}
class C extends B {
  get y() {
    assert.sameValue(super.x, 2, "The value of `super.x` is `2`");
    return super.method();
  }
}
assert.sameValue(new C().y, 1, "The value of `new C().y` is `1`");