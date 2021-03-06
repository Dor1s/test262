var outerScope = {
  x: 0
};
var innerScope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (outerScope) {
  with (innerScope) {
    x ^= 3;
  }
}
if (innerScope.x !== 1) {
  $ERROR('#1: innerScope.x === 1. Actual: ' + (innerScope.x));
}
if (outerScope.x !== 0) {
  $ERROR('#2: outerScope.x === 0. Actual: ' + (outerScope.x));
}