import * as ns from './instn-star-ambiguous_FIXTURE.js';
assert('first' in ns, 'Non-ambiguous exports from first module are present');
assert('second' in ns, 'Non-ambiguous exports from second module are present');
assert.sameValue('both' in ns, false, 'Ambiguous export is not present');