import * as named from './instn-star-props-dflt-skip-star-named_FIXTURE.js';
import * as production from './instn-star-props-dflt-skip-star-prod_FIXTURE.js';
assert('namedOther' in named);
assert.sameValue(
  'default' in named, false, 'default specified via identifier'
);
assert('productionOther' in production);
assert.sameValue(
  'default' in production, false, 'default specified via dedicated production'
);