let x = 'outside';
var probeExpr, probeSelector, probeStmt;
switch (probeExpr = function() { return x; }, null) {
  case probeSelector = function() { return x; }, null:
    probeStmt = function() { return x; };
    let x = 'inside';
}
assert.sameValue(probeExpr(), 'outside');
assert.sameValue(
  probeSelector(), 'inside', 'reference from "selector" Expression'
);
assert.sameValue(probeStmt(), 'inside', 'reference from Statement position');