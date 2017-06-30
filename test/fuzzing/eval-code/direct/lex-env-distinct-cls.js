class outside {}
eval('class outside {}');
eval('"use strict"; class outside {}');
eval('class xNonStrict {}');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
eval('"use strict"; class xStrict {}');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});