var base = +Infinity;
var exponents = [];
exponents[0] = -Infinity;
exponents[1] = -1.7976931348623157E308; //largest (by module) finite number
exponents[2] = -1;
exponents[3] = -0.000000000000001;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== +0) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== +0");
  }
}