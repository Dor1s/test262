var x = 'outside';
var probe1, probe2;
function f(
    _ = probe1 = function() { return x; },
    ...[__ = (eval('var x = "inside";'), probe2 = function() { return x; })]
  ) {
}
f();
assert.sameValue(probe1(), 'outside');
assert.sameValue(probe2(), 'inside');