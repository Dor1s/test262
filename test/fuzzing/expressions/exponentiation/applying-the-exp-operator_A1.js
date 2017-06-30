var exponent = NaN;
var bases = [];
bases[0] = -Infinity;
bases[1] = -1.7976931348623157E308; //largest (by module) finite number
bases[2] = -0.000000000000001;
bases[3] = -0;
bases[4] = +0
bases[5] = 0.000000000000001;
bases[6] = 1.7976931348623157E308; //largest finite number
bases[7] = +Infinity;
bases[8] = NaN;
for (var i = 0; i < bases.length; i++) {
  assert.sameValue(
    bases[i] ** exponent,
    NaN,
    bases[i] + " ** " + exponent
  );
}