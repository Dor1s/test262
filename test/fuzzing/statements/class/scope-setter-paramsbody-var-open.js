var x = 'outside';
var probeParams, probeBody;
class C {
  set a(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
}
C.prototype.a = undefined;
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');