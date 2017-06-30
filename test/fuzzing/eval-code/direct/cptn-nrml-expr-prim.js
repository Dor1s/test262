var x;
if (eval("x = 1") !== 1) {
  $ERROR('#1: eval("x = 1") === 1. Actual: ' + (eval("x = 1")));
}
if (eval("1") !== 1) {
  $ERROR('#2: eval("1") === 1. Actual: ' + (eval("1")));
}
if (eval("'1'") !== '1') {
  $ERROR('#3: eval("\'1\'") === \'1\'. Actual: ' + (eval("'1'")));
}
x = 1;
if (eval("++x") !== 2) {
  $ERROR('#4: x = 1; eval("++x") === 2. Actual: ' + (x));
}