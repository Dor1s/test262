function f(a, ...rest) {
  arguments[0] = 1;
  assert.sameValue(a, 3, "The value of `a` is `3`");
  arguments[1] = 2;
  assert(compareArray(rest, [4, 5]), "`compareArray(rest, [4, 5])` returns `true`");
}
f(3, 4, 5);