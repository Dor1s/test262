export { g as g2 } from './instn-iee-bndng-gen.js';
assert.throws(ReferenceError, function() {
  g;
});
assert.sameValue(typeof g, 'undefined');
assert.throws(ReferenceError, function() {
  g2;
});
assert.sameValue(typeof g2, 'undefined');