var base = -0;
var exponents = [];
exponents[4] = -0.000000000000001;
exponents[3] = -2;
exponents[2] = -Math.PI;
exponents[1] = -1.7976931348623157E308; //largest (by module) finite number
exponents[0] = -Infinity;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== +Infinity) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== +Infinity");
  }
}