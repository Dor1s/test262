let outside = 23;
eval('let outside;');
eval('"use strict"; let outside;');
eval('let xNonStrict = 3;');
assert.sameValue(typeof xNonStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xNonStrict;
});
eval('"use strict"; let xStrict = 3;');
assert.sameValue(typeof xStrict, 'undefined');
assert.throws(ReferenceError, function() {
  xStrict;
});