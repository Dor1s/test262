assert.sameValue(
  eval('1; for (var runA = true; runA; runA = false) { }'), undefined
);
assert.sameValue(
  eval('2; for (var runB = true; runB; runB = false) { 3; }'), 3
);