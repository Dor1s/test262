var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  (function() {
    "use strict";
    x *= 3;
  })();
}
if (scope.x !== 6) {
  $ERROR('#1: scope.x === 6. Actual: ' + (scope.x));
}