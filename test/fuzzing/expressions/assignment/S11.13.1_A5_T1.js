function testFunction() {
  var x = 0;
  var scope = {x: 1};
  with (scope) {
    x = (delete scope.x, 2);
  }
  if (scope.x !== 2) {
    $ERROR('#1: scope.x === 2. Actual: ' + (scope.x));
  }
  if (x !== 0) {
    $ERROR('#2: x === 0. Actual: ' + (x));
  }
}
testFunction();