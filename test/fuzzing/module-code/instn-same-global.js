import './instn-same-global-set_FIXTURE.js';
var global = fnGlobalObject();
assert.sameValue(global.test262, 262);