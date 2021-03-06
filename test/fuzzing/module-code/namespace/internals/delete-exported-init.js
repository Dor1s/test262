import * as ns from './delete-exported-init.js';
export var local1 = 333;
var local2 = 444;
export { local2 as renamed };
export { local1 as indirect } from './delete-exported-init.js';
assert.throws(TypeError, function() {
  delete ns.local1;
}, 'delete: local1');
assert.sameValue(
  Reflect.deleteProperty(ns, 'local1'), false, 'Reflect.deleteProperty: local1'
);
assert.sameValue(ns.local1, 333, 'binding unmodified: local1');
assert.throws(TypeError, function() {
  delete ns.renamed;
}, 'delete: renamed');
assert.sameValue(
  Reflect.deleteProperty(ns, 'renamed'), false, 'Reflect.deleteProperty: renamed'
);
assert.sameValue(ns.renamed, 444, 'binding unmodified: renamed');
assert.throws(TypeError, function() {
  delete ns.indirect;
}, 'delete: indirect');
assert.sameValue(
  Reflect.deleteProperty(ns, 'indirect'),
  false,
  'Reflect.deleteProperty: indirect'
);
assert.sameValue(ns.indirect, 333, 'binding unmodified: indirect');