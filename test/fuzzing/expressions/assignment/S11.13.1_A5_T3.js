var outerScope = {x: 0};
var innerScope = {x: 1};
with (outerScope) {
  with (innerScope) {
    x = (delete innerScope.x, 2);
  }
}
if (innerScope.x !== 2) {
  $ERROR('#1: innerScope.x === 2. Actual: ' + (innerScope.x));
}
if (outerScope.x !== 0) {
  $ERROR('#2: outerScope.x === 0. Actual: ' + (outerScope.x));
}