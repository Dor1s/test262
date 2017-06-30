var base = -0;
var exponents = [];
exponents[2] = -1;
exponents[1] = -111;
exponents[0] = -111111;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== -Infinity) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== -Infinity");
  }
}