var probeExpr, probeSelector, probeStmt;
var probeBefore = function() { return x; };
switch (eval('var x = 1;'), probeExpr = function() { return x; }, null) {
  case eval('var x = 2;'), probeSelector = function() { return x; }, null:
    probeStmt = function() { return x; };
    var x = 3;
}
assert.sameValue(probeBefore(), 3, 'reference preceeding statement');
assert.sameValue(probeExpr(), 3, 'reference from first Expression');
assert.sameValue(probeSelector(), 3, 'reference from "selector" Expression');
assert.sameValue(probeStmt(), 3, 'reference from Statement position');
assert.sameValue(x, 3, 'reference following statement');