var x = 0;
x |= 1; 
if (x !== 1) {
  $ERROR('#1: var x = 0; x |= 1; x === 1. Actual: ' + (x));
}
var y;
y = 1;
y |= 0;
if (y !== 1) {
  $ERROR('#2: y = 1; y |= 0; y === 1. Actual: ' + (y));
}