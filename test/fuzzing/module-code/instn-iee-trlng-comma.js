export { a , } from './instn-iee-trlng-comma_FIXTURE.js';
export { a as b , } from './instn-iee-trlng-comma_FIXTURE.js';
import { a, b } from './instn-iee-trlng-comma.js';
assert.sameValue(a, 333, 'comma following named export');
assert.sameValue(b, 333, 'comma following re-named export');