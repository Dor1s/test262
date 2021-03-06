var count = 0;
class A {
  constructor() {
    count++;
  }
}
class B extends A {
  constructor() {
    super();
    // envRec.[[thisBindingStatus]] is "initialized"
    this.af = _ => super();
  }
}
var b = new B();
assert.throws(ReferenceError, function() {
  b.af();
});
assert.sameValue(count, 2, "The value of `count` is `2`, because S7 of `SuperCall : super Arguments` will call the super constructor.");