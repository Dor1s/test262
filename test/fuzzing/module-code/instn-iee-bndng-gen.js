assert.sameValue(
  g2().next().value,
  455,
  'binding is initialized to function value prior to module evaluation'
);
assert.throws(TypeError, function() {
  g2 = null;
});
assert.sameValue(g2().next().value, 455, 'binding value is immutable');
import { g2 } from './instn-iee-bndng-gen_FIXTURE.js';
export function* g () { return 455; }