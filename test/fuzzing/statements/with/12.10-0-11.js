  function f(o) {
    function innerf(o) {
      var x = 42;
      with (o) {
        return x;
      }
    }
    return innerf(o);
  }
assert.sameValue(f({}), 42);