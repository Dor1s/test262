var global = this;
Object.defineProperty(this, "x", {
  configurable: true,
  value: 1
});
(function() {
  "use strict";
  x = (delete global.x, 2);
})();
if (this.x !== 2) {
  $ERROR('#1: this.x === 2. Actual: ' + (this.x));
}