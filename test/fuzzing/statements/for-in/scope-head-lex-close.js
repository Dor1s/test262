let x = 'outside';
var probeDecl, probeExpr, probeBody;
for (
    let [x, _ = probeDecl = function() { return x; }]
    in
    { i: probeExpr = function() { typeof x; } }
  )
  probeBody = function() { return x; };
assert.throws(ReferenceError, probeExpr);
assert.sameValue(probeDecl(), 'i', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'i', 'reference from statement body');