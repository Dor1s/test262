class WS1 extends WeakSet {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new WS1();
});
class WS2 extends WeakSet {
  constructor() {
    super();
  }
}
new WS2();