(function() {
  var finished = false;
  function getF() {
    return f;
  }
  function f(_, n) {
    if (n === 0) {
      finished = true;
      return;
    }
    return getF()`${n-1}`;
  }
  f(null, $MAX_ITERATIONS);
  return finished;
}());