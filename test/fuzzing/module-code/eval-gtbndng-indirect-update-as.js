import { x as y, x as z } from './eval-gtbndng-indirect-update-as_FIXTURE.js';
assert.sameValue(y, 1);
assert.sameValue(z, 1);
fnGlobalObject().test262update();
assert.sameValue(y, 2);
assert.sameValue(z, 2);