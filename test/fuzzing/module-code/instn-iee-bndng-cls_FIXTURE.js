export { A as B } from './instn-iee-bndng-cls.js';
assert.throws(ReferenceError, function() {
  A;
});
assert.sameValue(typeof A, 'undefined');
assert.throws(ReferenceError, function() {
  B;
});
assert.sameValue(typeof B, 'undefined');