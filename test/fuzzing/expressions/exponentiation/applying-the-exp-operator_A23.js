var exponents = [];
var bases = [];
bases[0] = -1.7976931348623157E308; //largest (by module) finite number
bases[1] = -Math.PI;
bases[2] = -1;
bases[3] = -0.000000000000001;
exponents[0] = -Math.PI;
exponents[1] = -Math.E;
exponents[2] = -1.000000000000001;
exponents[3] = -0.000000000000001;
exponents[4] = 0.000000000000001;
exponents[5] = 1.000000000000001;
exponents[6] = Math.E;
exponents[7] = Math.PI;
for (var i = 0; i < bases.length; i++) {
  for (var j = 0; j < exponents.length; j++) {
    assert.sameValue(
      bases[i] ** exponents[j],
      NaN,
      bases[i] + " ** " + exponents[j]
    );
  }
}