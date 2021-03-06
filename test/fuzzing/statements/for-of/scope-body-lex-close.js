let x = 'outside';
var probeDecl, probeBody;
for (
    let [x, _ = probeDecl = function() { return x; }]
    of
    [['inside']]
  )
  probeBody = function() { return x; };
assert.sameValue(probeDecl(), 'inside', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'inside', 'reference from statement body');
assert.sameValue(x, 'outside');