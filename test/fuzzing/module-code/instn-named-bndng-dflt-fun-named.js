assert.sameValue(f(), 23, 'function value is hoisted');
assert.sameValue(f.name, 'fName', 'correct name is assigned');
import f from './instn-named-bndng-dflt-fun-named.js';
export default function fName() { return 23; };