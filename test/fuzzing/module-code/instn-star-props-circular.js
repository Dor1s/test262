import * as a from './instn-star-props-circular-a_FIXTURE.js';
import * as b from './instn-star-props-circular-b_FIXTURE.js';
assert('fromA' in a, 'entry for binding from "a" in namespace of module A');
assert('fromB' in a, 'entry for binding from "b" in namespace of module A');
assert('fromA' in b, 'entry for binding from "a" in namespace of module B');
assert('fromB' in b, 'entry for binding from "b" in namespace of module B');