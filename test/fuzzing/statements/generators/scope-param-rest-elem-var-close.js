var x = 'outside';
var probeParam, probeBody;
function* g(
    ...[_ = (eval('var x = "inside";'), probeParam = function() { return x; })]
  ) {
    probeBody = function() { return x; }
}
g().next();
assert.sameValue(probeParam(), 'inside');
assert.sameValue(probeBody(), 'outside');