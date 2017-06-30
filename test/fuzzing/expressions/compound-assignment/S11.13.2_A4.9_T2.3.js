var x;
x = 1;
x &= null;
if (x !== 0) {
  $ERROR('#1: x = 1; x &= null; x === 0. Actual: ' + (x));
}
x = null;
x &= 1;
if (x !== 0) {
  $ERROR('#2: x = null; x &= 1; x === 0. Actual: ' + (x));
}
x = new Number(1);
x &= null;
if (x !== 0) {
  $ERROR('#3: x = new Number(1); x &= null; x === 0. Actual: ' + (x));
}
x = null;
x &= new Number(1);
if (x !== 0) {
  $ERROR('#4: x = null; x &= new Number(1); x === 0. Actual: ' + (x));
}