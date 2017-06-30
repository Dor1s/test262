var thisValue = null;
(function() {
  thisValue = eval('this;');
}());
assert.sameValue(thisValue, undefined);