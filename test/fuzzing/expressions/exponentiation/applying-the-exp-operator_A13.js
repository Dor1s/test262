var base = -Infinity;
var exponents = [];
exponents[0] = 1;
exponents[1] = 111;
exponents[2] = 111111;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== -Infinity) {
    $ERROR("(" + base + " **  " + exponents[i] + ") !== -Infinity");
  }
}