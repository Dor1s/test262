const outside = null;
eval('const outside = null;');
eval('"use strict"; const outside = null;');
eval('const xNonStrict = null;');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
eval('"use strict"; const xStrict = null;');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});