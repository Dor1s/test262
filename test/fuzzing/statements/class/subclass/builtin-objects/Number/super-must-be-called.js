class N extends Number {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new N();
});
class N2 extends Number {
  constructor() {
    super();
  }
}
new N2();