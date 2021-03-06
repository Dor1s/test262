var calls = 0;
class B {}
B.prototype.x = 42;
class C extends B {
  constructor() {
    super();
    calls++;
    assert.sameValue(super.x, 42, "The value of `super.x` is `42`");
  }
}
new C;
assert.sameValue(calls, 1, "The value of `calls` is `1`");