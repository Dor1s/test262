var exponent = +Infinity;
var bases = [];
bases[0] = -1;
bases[1] = 1
for (var i = 0; i < bases.length; i++) {
  assert.sameValue(
    bases[i] ** exponent,
    NaN,
    bases[i] + " ** " + exponent
  );
}