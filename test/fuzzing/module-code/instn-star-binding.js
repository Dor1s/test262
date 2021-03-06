assert.sameValue(
  typeof ns, 'object', 'binding is initialized prior to module evaluation'
);
var original = ns;
assert.throws(TypeError, function() {
  ns = null;
}, 'binding rejects assignment');
assert.sameValue(ns, original, 'binding value is immutable');
import * as ns from './instn-star-binding.js';