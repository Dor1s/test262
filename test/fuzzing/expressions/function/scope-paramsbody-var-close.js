var probe;
(function(_ = null) {
  var x = 'inside';
  probe = function() { return x; };
}());
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');