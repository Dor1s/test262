var x = 'outside';
var probe1, probe2, probeBody;
function f(
    _ = (eval('var x = "inside";'), probe1 = function() { return x; }),
    __ = probe2 = function() { return x; }
  ) {
  probeBody = function() { return x; };
}
f();
assert.sameValue(probe1(), 'inside');
assert.sameValue(probe2(), 'outside');
assert.sameValue(probeBody(), 'outside');