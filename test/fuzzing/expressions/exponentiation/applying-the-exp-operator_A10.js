var exponent = -Infinity;
var bases = [];
bases[0] = 0.999999999999999;
bases[1] = 0.5;
bases[2] = +0;
bases[3] = -0;
bases[4] = -0.5;
bases[5] = -0.999999999999999;
for (var i = 0; i < bases.length; i++) {
  if (Math.pow(bases[i], exponent) !== +Infinity) {
    $ERROR("(" + bases[i] + " ** " + exponent + ") !== +Infinity");
  }
}