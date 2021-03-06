assert.sameValue(
  f2(),
  23,
  'binding is initialized to function value prior to module evaluation'
);
assert.throws(TypeError, function() {
  f2 = null;
}, 'binding rejects assignment');
assert.sameValue(f2(), 23, 'binding value is immutable');
import { f as f2 } from './instn-named-bndng-fun.js';
export function f() { return 23; }