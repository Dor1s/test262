var probe;
function* g(_ = null) {
  var x = 'inside';
  probe = function() { return x; };
}
g().next();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');