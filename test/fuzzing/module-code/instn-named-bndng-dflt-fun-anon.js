assert.sameValue(f(), 23, 'function value is hoisted');
assert.sameValue(f.name, 'default', 'correct name is assigned');
import f from './instn-named-bndng-dflt-fun-anon.js';
export default function() { return 23; };