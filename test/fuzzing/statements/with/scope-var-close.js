var probeBody;
with ({ x: 0 })
  var x = 1, _ = probeBody = function() { return x; };
var x = 2;
assert.sameValue(probeBody(), 1, 'reference from statement body');
assert.sameValue(x, 2, 'reference following statement');