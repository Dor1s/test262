assert.throws(ReferenceError, function() {
  typeof y;
}, 'binding is created but not initialized');
import { y } from './instn-iee-bndng-let_FIXTURE.js';
export let x;