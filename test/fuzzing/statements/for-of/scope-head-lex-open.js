let x = 'outside';
var probeBefore = function() { return x; };
var probeExpr;
for (let x of (probeExpr = function() { typeof x; }, [])) ;
assert.sameValue(probeBefore(), 'outside');
assert.throws(ReferenceError, probeExpr);