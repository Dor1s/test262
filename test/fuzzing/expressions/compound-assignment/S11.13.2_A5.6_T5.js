Object.defineProperty(this, "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 2;
  }
});
(function() {
  "use strict";
  x <<= 3;
})();
if (this.x !== 16) {
  $ERROR('#1: this.x === 16. Actual: ' + (this.x));
}