assert.sameValue(
  y,
  undefined,
  'binding is initialized to `undefined` prior to module evaulation'
);
assert.throws(TypeError, function() {
  y = null;
}, 'binding rejects assignment');
assert.sameValue(y, undefined, 'binding value is immutable');
import { x as y } from './instn-named-bndng-var.js';
export var x = 23;