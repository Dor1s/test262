class DV extends DataView {}
var buffer = new ArrayBuffer(1);
var dv = new DV(buffer);
assert.sameValue(dv.buffer, buffer);
assert.throws(TypeError, function() {
  new DV();
});