if ((1) !== 1) {
  $ERROR('#1: (1) === 1. Actual: ' + ((1)));
}
var x = new Number(1);
if ((x) !== x) {
  $ERROR('#2: var x = new Number(1); (x) === x. Actual: ' + ((x)));
}