class RE1 extends RegExp {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new RE1();
});
class RE2 extends RegExp {
  constructor() {
    super();
  }
}
new RE2();