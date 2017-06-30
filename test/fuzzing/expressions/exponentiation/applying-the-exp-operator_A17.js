var base = +0;
var exponents = [];
exponents[3] = Infinity;
exponents[2] = 1.7976931348623157E308; //largest finite number
exponents[1] = 1;
exponents[0] = 0.000000000000001;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== +0) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== +0");
  }
}