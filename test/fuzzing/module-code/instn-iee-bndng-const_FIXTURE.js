export { x as y } from './instn-iee-bndng-const.js';
assert.throws(ReferenceError, function() {
  x;
});
assert.sameValue(typeof x, 'undefined');
assert.throws(ReferenceError, function() {
  y;
});
assert.sameValue(typeof y, 'undefined');