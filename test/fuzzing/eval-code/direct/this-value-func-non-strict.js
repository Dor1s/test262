var thisValue;
(function() {
  thisValue = eval('this;');
}());
assert.sameValue(thisValue, this);