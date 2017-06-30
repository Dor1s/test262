import * as ns from './get-str-found-uninit.js';
assert.throws(ReferenceError, function() {
  ns.local1;
});
assert.throws(ReferenceError, function() {
  ns.renamed;
});
assert.throws(ReferenceError, function() {
  ns.indirect;
});
assert.throws(ReferenceError, function() {
  ns.default;
});
export let local1 = 23;
let local2 = 45;
export { local2 as renamed };
export { local1 as indirect } from './get-str-found-uninit.js';
export default null;