let x = 'outside';
var probeBefore = function() { return x; };
var probeExpr;
for (let x in { i: probeExpr = function() { typeof x; }}) ;
assert.sameValue(probeBefore(), 'outside');
assert.throws(ReferenceError, probeExpr);