var x = 'outside';
var probeParams, probeBody;
({
  *m(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
}.m().next());
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');