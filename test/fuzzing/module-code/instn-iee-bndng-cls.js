assert.throws(ReferenceError, function() {
  typeof B;
}, 'binding is created but not initialized');
import { B } from './instn-iee-bndng-cls_FIXTURE.js';
export class A {}