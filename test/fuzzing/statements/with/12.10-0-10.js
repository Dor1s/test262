  function f(o) {
    function innerf(o, x) {
      with (o) {
        return x;
      }
    }
    return innerf(o, 42);
  }
assert.sameValue(f({}), 42);