class outside {}
(0,eval)('class outside {}');
(0,eval)('"use strict"; class outside {}');
(0,eval)('class xNonStrict {}');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
(0,eval)('"use strict"; class xStrict {}');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});