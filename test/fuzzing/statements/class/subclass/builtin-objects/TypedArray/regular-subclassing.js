[
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
].forEach(function(Constructor) {
  class Typed extends Constructor {}
  var arr = new Typed(2);
  assert.sameValue(arr.length, 2);
});