var probe;
var C = class {
  // A parameter expression is necessary to trigger the creation of the scope
  // under test.
  static set a(_ = null) {
    var x = 'inside';
    probe = function() { return x; };
  }
};
C.a = null;
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');