var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  function getF() { return f; }
  return getF()(n - 1);
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);