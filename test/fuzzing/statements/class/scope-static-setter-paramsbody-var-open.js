var x = 'outside';
var probeParams, probeBody;
class C {
  static set a(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
}
C.a = undefined;
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');