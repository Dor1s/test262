const outside = null;
(0,eval)('const outside = null;');
(0,eval)('"use strict"; const outside = null;');
(0,eval)('const xNonStrict = null;');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
(0,eval)('"use strict"; const xStrict = null;');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});