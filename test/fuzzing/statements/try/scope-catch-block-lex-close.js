var probe, x;
try {
  throw null;
} catch (_) {
  let x = 'inside';
  probe = function() { return x; };
}
x = 'outside';
assert.sameValue(x, 'outside');
assert.sameValue(probe(), 'inside');