var probeBefore = function() { return x; };
let x = 'outside';
var probeExpr, probeDecl, probeBody;
for (
    let [x, _, __ = probeDecl = function() { return x; }]
    of
    [['inside', probeExpr = function() { typeof x; }]]
  )
  probeBody = function() { return x; };
assert.sameValue(probeBefore(), 'outside');
assert.throws(ReferenceError, probeExpr);
assert.sameValue(probeDecl(), 'inside', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'inside', 'reference from statement body');