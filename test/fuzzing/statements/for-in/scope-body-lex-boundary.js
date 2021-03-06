let x = 'outside';
var probeFirst, probeSecond;
for (let x in { a: 0, b: 0 })
  if (!probeFirst)
    probeFirst = function() { return x; };
  else
    probeSecond = function() { return x; };
assert.notSameValue(probeFirst(), probeSecond());
assert(
  probeFirst() === 'a' || probeFirst() === 'b',
  'First binding is either "a" or "b"'
);
assert(
  probeSecond() === 'a' || probeSecond() === 'b',
  'Second binding is either "a" or "b"'
);