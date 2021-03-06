var scope = {
  get x() {
    delete this.x;
    return 6;
  }
};
with (scope) {
  (function() {
    "use strict";
    x /= 3;
  })();
}
if (scope.x !== 2) {
  $ERROR('#1: scope.x === 2. Actual: ' + (scope.x));
}