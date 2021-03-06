var probeBefore = function() { return x; };
var x = 1;
var probeDecl, probeExpr, probeBody;
for (
    let [_ = probeDecl = function() { return x; }]
    of
    [[eval('var x = 2;'), probeExpr = function() { return x; }]]
  )
  probeBody = function() { return x; };
assert.sameValue(probeBefore(), 2, 'reference preceeding statement');
assert.sameValue(probeDecl(), 2, 'reference from ForDeclaration');
assert.sameValue(probeExpr(), 2, 'reference from AssignmentExpression');
assert.sameValue(probeBody(), 2, 'reference from statement body');
assert.sameValue(x, 2, 'reference following statement');