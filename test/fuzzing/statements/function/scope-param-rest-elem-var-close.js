var x = 'outside';
var probeParam, probeBody;
function f(
    ...[_ = (eval('var x = "inside";'), probeParam = function() { return x; })]
  ) {
    probeBody = function() { return x; }
}
f();
assert.sameValue(probeParam(), 'inside');
assert.sameValue(probeBody(), 'outside');