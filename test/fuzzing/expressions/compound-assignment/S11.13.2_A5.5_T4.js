var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  (function() {
    "use strict";
    x -= 1;
  })();
}
if (scope.x !== 1) {
  $ERROR('#1: scope.x === 1. Actual: ' + (scope.x));
}