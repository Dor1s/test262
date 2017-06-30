var x = 'outside';
var probeParams, probeBody;
var C = class {
  m(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
};
C.prototype.m();
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');