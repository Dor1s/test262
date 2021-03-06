import * as self1 from './instn-star-equality.js';
import * as self2 from './instn-star-equality.js';
import * as other1 from './instn-star-equality-other_FIXTURE.js';
import * as self3 from './instn-star-equality.js';
import * as other2 from './instn-star-equality-other_FIXTURE.js';
import { testNs } from './instn-star-equality-other_FIXTURE.js';
assert.sameValue(
  self1, self2, 'Local namespace objects from consecutive declarations'
);
assert.sameValue(
  self1, self3, 'Local namespace objects from non-consective declarations'
);
assert.sameValue(other1, other2, 'External namespace objects');
assert.sameValue(self1, testNs, 'Re-exported namespace objects');
assert.notSameValue(self1, other1);