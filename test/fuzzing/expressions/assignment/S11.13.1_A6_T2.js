function testAssignment() {
  var x = 0;
  var innerX = (function() {
    x = (eval("var x = 2;"), 1);
    return x;
  })();
  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 1) {
    $ERROR('#2: x === 1. Actual: ' + (x));
  }
}
testAssignment();