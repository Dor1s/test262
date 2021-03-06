var probeBefore = function() { return x; };
let x = 'outside';
var probeExpr, probeDecl, probeBody;
for (
    let [x, _ = probeDecl = function() { return x; }]
    in
    { i: probeExpr = function() { typeof x; }}
  )
  probeBody = function() { return x; };
assert.sameValue(probeBefore(), 'outside');
assert.throws(ReferenceError, probeExpr);
assert.sameValue(probeDecl(), 'i', 'reference from ForDeclaration');
assert.sameValue(probeBody(), 'i', 'reference from statement body');