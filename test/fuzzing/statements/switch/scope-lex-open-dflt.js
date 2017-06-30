let x = 'outside';
var probeExpr, probeStmt;
switch (probeExpr = function() { return x; }) {
  default:
    probeStmt = function() { return x; };
    let x = 'inside';
}
assert.sameValue(probeExpr(), 'outside');
assert.sameValue(probeStmt(), 'inside');