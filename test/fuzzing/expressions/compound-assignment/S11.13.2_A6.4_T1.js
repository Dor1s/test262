function testCompoundAssignment() {
  var x = 3;
  var innerX = (function() {
    x += (eval("var x = 2;"), 1);
    return x;
  })();
  if (innerX !== 2) {
    $ERROR('#1: innerX === 2. Actual: ' + (innerX));
  }
  if (x !== 4) {
    $ERROR('#2: x === 4. Actual: ' + (x));
  }
}
testCompoundAssignment();