var global = (function() { return this; }());
var thisValue = null;
var method = {
  method() {
    thisValue = this;
  }
}.method;
method();
assert.sameValue(thisValue, global);