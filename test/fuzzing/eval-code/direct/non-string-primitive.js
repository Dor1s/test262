var x = 1;
if (eval(x) !== x) {
  $ERROR('#1: x = 1; eval(x) === x. Actual: ' + (eval(x)));
}
if (eval(1) !== 1) {
  $ERROR('#2: eval(1) === 1. Actual: ' + (eval(1)));
}
if (eval(true) !== true) {
  $ERROR('#3: eval(true) === true. Actual: ' + (eval(true)));
}
if (eval(null) !== null) {
  $ERROR('#4: eval(null) === null. Actual: ' + (eval(null)));
}
if (eval(undefined) !== undefined) {
  $ERROR('#5: eval(undefined) === undefined. Actual: ' + (eval(undefined)));
}