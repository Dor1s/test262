assert.throws(ReferenceError, function() {
  f;
});
switch (1) {
  default:
    function f() {  }
}
assert.throws(ReferenceError, function() {
  f;
});