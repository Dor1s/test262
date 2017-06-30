var probe;
({
  // A parameter expression is necessary to trigger the creation of the scope
  // under test.
  m(_ = null) {
    var x = 'inside';
    probe = function() { return x; };
  }
}.m());
var x = 'outside';
assert.sameValue(probe(), 'inside');
assert.sameValue(x, 'outside');