var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  (function() {
    "use strict";
    ++x;
  })();
}
if (scope.x !== 3) {
  $ERROR('#1: scope.x === 3. Actual: ' + (scope.x));
}