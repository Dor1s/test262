var x = 'outside';
var probeParams, probeBody;
class C {
  *m(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
}
C.prototype.m().next();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');