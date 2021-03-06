let x = 'outside';
var probeDecl, probeBody;
for (
    let [x, _ = probeDecl = function() { return x; }]
    in
    { i: 0 }
  )
  probeBody = function() { return x; };
assert.sameValue(probeDecl(), 'i', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'i', 'reference from statement body');
assert.sameValue(x, 'outside');