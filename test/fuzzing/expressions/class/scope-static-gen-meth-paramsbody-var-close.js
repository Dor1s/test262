var probe;
var C = class {
  // A parameter expression is necessary to trigger the creation of the scope
  // under test.
  static *m(_ = null) {
    var x = 'inside';
    probe = function() { return x; };
  }
};
C.m().next();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');