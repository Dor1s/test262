  function f(o) {
    var x = 42;
    function innerf(o) {
      with (o) {
        return x;
      }
    }
    return innerf(o);
  }
assert.sameValue(f({}), 42);