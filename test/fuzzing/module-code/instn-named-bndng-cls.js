assert.throws(ReferenceError, function() {
  typeof D;
}, 'binding is created but not initialized');
import { C as D } from './instn-named-bndng-cls.js';
export class C {}