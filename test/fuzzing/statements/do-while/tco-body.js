var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  do {
    return f(n - 1);
  } while (false)
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);