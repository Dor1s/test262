var callCount = 0;
(function f(n) {
  if (n === 0) {
    callCount += 1
    return;
  }
  for (var x = 0; ;) {
    return f(n - 1);
  }
}($MAX_ITERATIONS));
assert.sameValue(callCount, 1);