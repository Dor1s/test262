  function f(o) {
    function innerf(o, x) {
      try {
        throw o;
      }
      catch (e) {
        return x;
      }
    }
    return innerf(o, 42);
  }
assert.sameValue(f({}), 42);