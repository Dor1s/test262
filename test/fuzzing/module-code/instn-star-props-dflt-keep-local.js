import * as named from './instn-star-props-dflt-keep-local-named_FIXTURE.js';
import * as production from './instn-star-props-dflt-keep-local-prod_FIXTURE.js';
assert.sameValue('default' in named, true, 'default specified via identifier');
assert.sameValue(
  'default' in production, true, 'default specified via dedicated production'
);