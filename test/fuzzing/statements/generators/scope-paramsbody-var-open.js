var x = 'outside';
var probeParams, probeBody;
function* g(_ = probeParams = function() { return x; }) {
  var x = 'inside';
  probeBody = function() { return x; };
}
g().next();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');