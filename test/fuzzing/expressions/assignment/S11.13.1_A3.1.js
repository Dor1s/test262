var x = 1;
if (x !== 1) {
  $ERROR('#1: var x = 1; x === 1. Actual: ' + (x));
}
x = 1;
if (x !== 1) {
  $ERROR('#2: x = 1; x === 1. Actual: ' + (x));
}