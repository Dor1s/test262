function testCompoundAssignment() {
  var x = 5;
  var innerX = (function() {
    x &= (eval("var x = 2;"), 3);
    return x;
  })();
  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 1) {
    $ERROR('#2: x === 1. Actual: ' + (x));
  }
}
testCompoundAssignment();