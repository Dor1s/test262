assert.throws(ReferenceError, function() {
  0, { a: x } = {};
});
let x;