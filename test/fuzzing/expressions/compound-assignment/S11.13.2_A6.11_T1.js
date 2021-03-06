function testCompoundAssignment() {
  var x = 1;
  var innerX = (function() {
    x |= (eval("var x = 2;"), 4);
    return x;
  })();
  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 5) {
    $ERROR('#2: x === 5. Actual: ' + (x));
  }
}
testCompoundAssignment();