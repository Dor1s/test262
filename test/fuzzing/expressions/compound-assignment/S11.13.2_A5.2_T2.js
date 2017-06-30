var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 6;
  }
};
with (scope) {
  x /= 3;
}
if (scope.x !== 2) {
  $ERROR('#1: scope.x === 2. Actual: ' + (scope.x));
}
if (x !== 0) {
  $ERROR('#2: x === 0. Actual: ' + (x));
}