  function f(o) {
    var x = 42;
    function innerf(o) {
      try {
        throw o;
      }
      catch (e) {
        return x;
      }
    }
    return innerf(o);
  }
assert.sameValue(f({}), 42);