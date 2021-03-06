assert.sameValue(
  g2().next().value,
  23,
  'binding is initialized to function value prior to module evaluation'
);
assert.throws(TypeError, function() {
  g2 = null;
}, 'binding rejects assignment');
assert.sameValue(g2().next().value, 23, 'binding value is immutable');
import { g as g2 } from './instn-named-bndng-gen.js';
export function* g() { return 23; }