assert.sameValue(g().next().value, 23, 'generator function value is hoisted');
assert.sameValue(g.name, 'default', 'correct name is assigned');
import g from './instn-named-bndng-dflt-gen-anon.js';
export default function* () { return 23; };