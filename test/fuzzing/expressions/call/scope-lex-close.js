var probe;
(function() {
  let x = 'inside';
  probe = function() { return x; };
}());
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');