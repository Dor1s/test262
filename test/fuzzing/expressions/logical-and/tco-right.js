var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  return true && f(n - 1);
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);