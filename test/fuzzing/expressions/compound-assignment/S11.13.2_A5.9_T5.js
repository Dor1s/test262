Object.defineProperty(this, "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 5;
  }
});
(function() {
  "use strict";
  x &= 3;
})();
if (this.x !== 1) {
  $ERROR('#1: this.x === 1. Actual: ' + (this.x));
}