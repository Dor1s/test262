var x;
assert.throws(ReferenceError, function() {
  0, { x: x = y } = {};
});
let y;