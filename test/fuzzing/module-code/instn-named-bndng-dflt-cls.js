assert.throws(ReferenceError, function() {
  typeof C;
}, 'Binding is created but not initialized.');
export default class {};
import C from './instn-named-bndng-dflt-cls.js';