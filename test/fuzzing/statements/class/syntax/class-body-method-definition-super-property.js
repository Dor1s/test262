class A {
  constructor() {
    super.toString();
  }
  dontDoThis() {
    super.makeBugs = 1;
  }
}
assert.sameValue(typeof A, "function");
var a = new A();
a.dontDoThis();
assert.sameValue(a.makeBugs, 1);