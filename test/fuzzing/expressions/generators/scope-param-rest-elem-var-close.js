var x = 'outside';
var probeParam, probeBody;
(function*(
    ...[_ = (eval('var x = "inside";'), probeParam = function() { return x; })]
  ) {
    probeBody = function() { return x; }
}().next());
assert.sameValue(probeParam(), 'inside');
assert.sameValue(probeBody(), 'outside');