var base = NaN;
var exponents = [];
exponents[0] = -Infinity;
exponents[1] = -1.7976931348623157E308; //largest (by module) finite number
exponents[2] = -0.000000000000001;
exponents[3] = 0.000000000000001;
exponents[4] = 1.7976931348623157E308; //largest finite number
exponents[5] = +Infinity;
exponents[6] = NaN;
for (var i = 0; i < exponents.length; i++) {
  assert.sameValue(
    base ** exponents[i],
    NaN,
    base + " ** " + exponents[i]
  );
}