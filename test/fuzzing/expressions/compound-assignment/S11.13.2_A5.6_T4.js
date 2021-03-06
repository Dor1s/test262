var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  (function() {
    "use strict";
    x <<= 3;
  })();
}
if (scope.x !== 16) {
  $ERROR('#1: scope.x === 16. Actual: ' + (scope.x));
}