var x = 'outside';
var probeParams, probeBody;
var C = class {
  static set a(_ = probeParams = function() { return x; }) {
    var x = 'inside';
    probeBody = function() { return x; };
  }
};
C.a = undefined;
assert.sameValue(probeParams(), 'outside');
assert.sameValue(probeBody(), 'inside');