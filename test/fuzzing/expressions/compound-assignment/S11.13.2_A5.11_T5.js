Object.defineProperty(this, "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 2;
  }
});
(function() {
  "use strict";
  x |= 4;
})();
if (this.x !== 6) {
  $ERROR('#1: this.x === 6. Actual: ' + (this.x));
}