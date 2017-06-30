var thisValue;
(function() {
  thisValue = eval('"use strict"; this;');
}());
assert.sameValue(thisValue, this);