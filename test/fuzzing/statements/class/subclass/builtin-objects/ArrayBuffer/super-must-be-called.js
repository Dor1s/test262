class AB1 extends ArrayBuffer {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new AB1(1);
});
class AB2 extends ArrayBuffer {
  constructor(length) {
    super(length);
  }
}
new AB2(1);