assert.sameValue(
  eval('var runA; 1; for (runA = true; runA; runA = false) { }'), undefined
);
assert.sameValue(
  eval('var runB; 2; for (runB = true; runB; runB = false) { 3; }'), 3
);