let outside = 23;
(0,eval)('let outside;');
(0,eval)('"use strict"; let outside;');
(0,eval)('let xNonStrict = 3;');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
(0,eval)('"use strict"; let xStrict = 3;');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});