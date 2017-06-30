function testAssignment() {
  var x = 0;
  var innerX = (function() {
    x = (eval("var x;"), 1);
    return x;
  })();
  if (innerX !== undefined) {
    $ERROR('#1: innerX === undefined. Actual: ' + (innerX));
  }
  if (x !== 1) {
    $ERROR('#2: x === 1. Actual: ' + (x));
  }
}
testAssignment();