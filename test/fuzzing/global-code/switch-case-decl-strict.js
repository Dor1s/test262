assert.throws(ReferenceError, function() {
  f;
});
switch (1) {
  case 1:
    function f() {  }
}
assert.throws(ReferenceError, function() {
  f;
});