var probeFirst;
var probeSecond = null;
for (let x = 'first'; probeSecond === null; x = 'second')
  if (!probeFirst)
    probeFirst = function() { return x; };
  else
    probeSecond = function() { return x; };
assert.sameValue(probeFirst(), 'first');
assert.sameValue(probeSecond(), 'second');