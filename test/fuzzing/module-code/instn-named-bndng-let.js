assert.throws(ReferenceError, function() {
  typeof y;
}, 'binding is created but not initialized');
import { x as y } from './instn-named-bndng-let.js';
export let x = 23;