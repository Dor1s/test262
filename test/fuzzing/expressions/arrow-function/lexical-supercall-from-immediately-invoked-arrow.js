var count = 0;
class A {
  constructor() {
    count++;
  }
}
class B extends A {
  constructor() {
    (_ => super())();
  }
}
var bar = new B();
assert.sameValue(count, 1);