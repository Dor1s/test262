export { f as f2 } from './instn-iee-bndng-fun.js';
assert.throws(ReferenceError, function() {
  f;
});
assert.sameValue(typeof f, 'undefined');
assert.throws(ReferenceError, function() {
  f2;
});
assert.sameValue(typeof f2, 'undefined');