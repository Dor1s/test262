export default class { valueOf() { return 45; } }
import C from './eval-export-dflt-cls-anon.js';
assert.sameValue(new C().valueOf(), 45, 'binding initialized');
assert.sameValue(C.name, 'default', 'correct name is assigned');