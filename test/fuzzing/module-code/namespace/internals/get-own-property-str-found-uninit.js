import * as ns from './get-own-property-str-found-uninit.js';
assert.throws(ReferenceError, function() {
  Object.prototype.hasOwnProperty.call(ns, 'local1');
}, 'hasOwnProperty: local1');
assert.throws(ReferenceError, function() {
  Object.getOwnPropertyDescriptor(ns, 'local1');
}, 'getOwnPropertyDescriptor: local1');
assert.throws(ReferenceError, function() {
  Object.prototype.hasOwnProperty.call(ns, 'renamed');
}, 'hasOwnProperty: renamed');
assert.throws(ReferenceError, function() {
  Object.getOwnPropertyDescriptor(ns, 'renamed');
}, 'getOwnPropertyDescriptor: renamed');
assert.throws(ReferenceError, function() {
  Object.prototype.hasOwnProperty.call(ns, 'indirect');
}, 'hasOwnProperty: indirect');
assert.throws(ReferenceError, function() {
  Object.getOwnPropertyDescriptor(ns, 'indirect');
}, 'getOwnPropertyDescriptor: indirect');
assert.throws(ReferenceError, function() {
  Object.prototype.hasOwnProperty.call(ns, 'default');
}, 'hasOwnProperty: default');
assert.throws(ReferenceError, function() {
  Object.getOwnPropertyDescriptor(ns, 'default');
}, 'getOwnPropertyDescriptor: default');
export let local1 = 23;
let local2 = 45;
export { local2 as renamed };
export { local1 as indirect } from './get-own-property-str-found-uninit.js';
export default null;