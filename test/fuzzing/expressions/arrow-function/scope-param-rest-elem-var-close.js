var x = 'outside';
var probeParam, probeBody;
((
    ...[_ = (eval('var x = "inside";'), probeParam = function() { return x; })]
  ) => {
    probeBody = function() { return x; }
})();
assert.sameValue(probeParam(), 'inside');
assert.sameValue(probeBody(), 'outside');