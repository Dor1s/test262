class DV1 extends DataView {
  constructor() {}
}
var buffer = new ArrayBuffer(1);
assert.throws(ReferenceError, function() {
  new DV1(buffer);
});
class DV2 extends DataView {
  constructor(length) {
    super(length);
  }
}
new DV2(buffer);