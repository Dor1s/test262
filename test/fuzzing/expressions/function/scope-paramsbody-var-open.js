var x = 'outside';
var probeParams, probeBody;
(function(_ = probeParams = function() { return x; }) {
  var x = 'inside';
  probeBody = function() { return x; };
}());
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');