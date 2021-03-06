function truncate(x) {
  if (x > 0) {
    return Math.floor(x);
  } else {
    return Math.ceil(x);
  }
}
var x, y;
x = 1.3; 
y = 1.1;
if (x % y !== 0.19999999999999996) {
  $ERROR('#1: x = 1.3; y = 1.1; x % y === 0.19999999999999996. Actual: ' + (x % y));
}
x = -1.3; 
y = 1.1; 
if (x % y !== -0.19999999999999996) {
  $ERROR('#2: x = -1.3; y = 1.1; x % y === -0.19999999999999996. Actual: ' + (x % y));
}
x = 1.3; 
y = -1.1;
if (x % y !== 0.19999999999999996) {
  $ERROR('#3: x = 1.3; y = -1.1; x % y === 0.19999999999999996. Actual: ' + (x % y));
}
x = -1.3; 
y = -1.1;
if (x % y !== -0.19999999999999996) {
  $ERROR('#4: x = -1.3; y = -1.1; x % y === -0.19999999999999996. Actual: ' + (x % y));
}
x = 1.3; 
y = 1.1;
if (x % y !== x - truncate(x / y) * y) {
  $ERROR('#5: x = 1.3; y = 1.1; x % y === x - truncate(x / y) * y. Actual: ' + (x % y));
}
x = -1.3; 
y = 1.1; 
if (x % y !== x - truncate(x / y) * y) {
  $ERROR('#6: x = -1.3; y = 1.1; x % y === x - truncate(x / y) * y. Actual: ' + (x % y));
}
x = 1.3; 
y = -1.1;
if (x % y !== x - truncate(x / y) * y) {
  $ERROR('#7: x = 1.3; y = -1.1; x % y === x - truncate(x / y) * y. Actual: ' + (x % y));
}
x = -1.3; 
y = -1.1;
if (x % y !== x - truncate(x / y) * y) {
  $ERROR('#8: x = -1.3; y = -1.1; x % y === x - truncate(x / y) * y. Actual: ' + (x % y));
}