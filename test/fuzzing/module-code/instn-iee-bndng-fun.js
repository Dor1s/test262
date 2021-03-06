assert.sameValue(
  f2(),
  77,
  'binding is initialized to function value prior to module evaluation'
);
assert.throws(TypeError, function() {
  f2 = null;
}, 'binding rejects assignment');
assert.sameValue(f2(), 77, 'binding value is immutable');
import { f2 } from './instn-iee-bndng-fun_FIXTURE.js';
export function f() { return 77; }