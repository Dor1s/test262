assert.throws(ReferenceError, function() {
  typeof y;
}, 'binding is created but not initialized');
import { y } from './instn-iee-bndng-const_FIXTURE.js';
export const x = null;