var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  x++;
}
if (scope.x !== 3) {
  $ERROR('#1: scope.x === 3. Actual: ' + (scope.x));
}
if (x !== 0) {
  $ERROR('#2: x === 0. Actual: ' + (x));
}