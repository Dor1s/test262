assert.sameValue(g().next().value, 23, 'generator function value is hoisted');
assert.sameValue(g.name, 'gName', 'correct name is assigned');
import g from './instn-named-bndng-dflt-gen-named.js';
export default function* gName() { return 23; };