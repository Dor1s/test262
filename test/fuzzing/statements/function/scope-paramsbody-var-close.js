var probe;
function f(_ = null) {
  var x = 'inside';
  probe = function() { return x; };
}
f();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');