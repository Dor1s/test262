function testAssignment() {
  var x = 0;
  var scope = {};
  with (scope) {
    x = (scope.x = 2, 1);
  }
  if (scope.x !== 2) {
    $ERROR('#1: scope.x === 2. Actual: ' + (scope.x));
  }
  if (x !== 1) {
    $ERROR('#2: x === 1. Actual: ' + (x));
  }
}
testAssignment();