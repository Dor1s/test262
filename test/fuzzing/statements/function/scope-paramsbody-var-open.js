var x = 'outside';
var probeParams, probeBody;
function f(_ = probeParams = function() { return x; }) {
  var x = 'inside';
  probeBody = function() { return x; };
}
f();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');