class M1 extends WeakMap {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new M1();
});
class M2 extends WeakMap {
  constructor() {
    super();
  }
}
new M2();