var x = 'outside';
var probe1, probe2;
({
  m(
    _ = probe1 = function() { return x; },
    ...[__ = (eval('var x = "inside";'), probe2 = function() { return x; })]
  ) {}
}.m());
assert.sameValue(probe1(), 'outside');
assert.sameValue(probe2(), 'inside');