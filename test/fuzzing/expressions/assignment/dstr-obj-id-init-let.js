var x;
assert.throws(ReferenceError, function() {
  0, { x = y } = {};
});
let y;