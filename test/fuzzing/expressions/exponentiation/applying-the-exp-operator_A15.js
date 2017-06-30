var base = -Infinity;
var exponents = [];
exponents[2] = -1;
exponents[1] = -111;
exponents[0] = -111111;
for (var i = 0; i < exponents.length; i++) {
  if ((base ** exponents[i]) !== -0) {
    $ERROR("(" + base + " ** " + exponents[i] + ") !== -0");
  }
}