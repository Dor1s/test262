(function() {
  var finished = false;
  function f(_, n) {
    if (n === 0) {
      finished = true;
      return;
    }
    return f`${n-1}`;
  }
  f(null, $MAX_ITERATIONS);
  return finished;
}());