assert.throws(ReferenceError, function() {
  typeof x;
});
assert.sameValue(y, undefined);
export default 3;
export var attr;
import x, { attr as y } from './instn-named-bndng-dflt-named.js';