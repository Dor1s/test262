Object.defineProperty(this, "x", {
  configurable: true,
  get: function() {
    delete this.x;
    return 2;
  }
});
(function() {
  "use strict";
  ++x;
})();
if (this.x !== 3) {
  $ERROR('#1: this.x === 3. Actual: ' + (this.x));
}