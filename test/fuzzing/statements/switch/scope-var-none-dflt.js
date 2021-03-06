var probeExpr, probeStmt;
var probeBefore = function() { return x; };
switch (eval('var x = 1;'), probeExpr = function() { return x; }) {
  default:
    probeStmt = function() { return x; };
    var x = 2;
}
assert.sameValue(probeBefore(), 2, 'reference preceeding statment');
assert.sameValue(probeExpr(), 2, 'reference from Expression position');
assert.sameValue(probeStmt(), 2, 'reference from Statement position');
assert.sameValue(x, 2, 'reference following statement');