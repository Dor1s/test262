var x = 'outside';
var probeParams, probeBody;
class C {
  static m(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
}
C.m();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');