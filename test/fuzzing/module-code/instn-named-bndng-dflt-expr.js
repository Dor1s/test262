assert.throws(ReferenceError, function() {
  typeof dflt;
}, 'binding is created but not initialized');
import dflt from './instn-named-bndng-dflt-expr.js';
export default (function() {});