var probe;
class C {
  // A parameter expression is necessary to trigger the creation of the scope
  // under test.
  *m(_ = null) {
    var x = 'inside';
    probe = function() { return x; };
  }
}
C.prototype.m().next();
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');