  function f(o) {
    function innerf(o) {
      try {
        throw o;
      }
      catch (e) {
        return e.x;
      }
    }
    return innerf(o);
  }
assert.sameValue(f({x:42}), 42);