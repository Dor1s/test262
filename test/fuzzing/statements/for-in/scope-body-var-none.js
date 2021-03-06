var probeBefore = function() { return x; };
var probeExpr, probeDecl, probeBody;
var x = 1;
for (
    let [_ = probeDecl = function() { return x; }]
    in
    { '': probeExpr = function() { return x; }}
  )
  var x = 2, __ = probeBody = function() { return x; };
assert.sameValue(probeBefore(), 2, 'reference preceeding statement');
assert.sameValue(probeExpr(), 2, 'reference from AssignmentExpression');
assert.sameValue(probeDecl(), 2, 'reference from ForDeclaration');
assert.sameValue(probeBody(), 2, 'reference from statement body');
assert.sameValue(x, 2, 'reference following statement');