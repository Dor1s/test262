(function() {
  function f() { return x + 1; }
  assert.throws(ReferenceError, function() {
    f();
  });
  const x = 1;
}());