import * as ns from './delete-exported-uninit.js';
assert.throws(TypeError, function() {
  delete ns.local1;
}, 'delete: local1');
assert.sameValue(
  Reflect.deleteProperty(ns, 'local1'), false, 'Reflect.deleteProperty: local1'
);
assert.throws(ReferenceError, function() {
  ns.local1;
}, 'binding unmodified: local1');
assert.throws(TypeError, function() {
  delete ns.renamed;
}, 'delete: renamed');
assert.sameValue(
  Reflect.deleteProperty(ns, 'renamed'), false, 'Reflect.deleteProperty: renamed'
);
assert.throws(ReferenceError, function() {
  ns.renamed;
}, 'binding unmodified: renamed');
assert.throws(TypeError, function() {
  delete ns.indirect;
}, 'delete: indirect');
assert.sameValue(
  Reflect.deleteProperty(ns, 'indirect'),
  false,
  'Reflect.deleteProperty: indirect'
);
assert.throws(ReferenceError, function() {
  ns.indirect;
}, 'binding unmodified: indirect');
assert.throws(TypeError, function() {
  delete ns.default;
}, 'delete: default');
assert.sameValue(
  Reflect.deleteProperty(ns, 'default'),
  false,
  'Reflect.deleteProperty: default'
);
assert.throws(ReferenceError, function() {
  ns.default;
}, 'binding unmodified: default');
export let local1 = 23;
let local2 = 45;
export { local2 as renamed };
export { local1 as indirect } from './delete-exported-uninit.js';
export default null;