export default class cName { valueOf() { return 45; } }
import C from './eval-export-dflt-cls-named.js';
assert.sameValue(new C().valueOf(), 45, 'binding initialized');
assert.sameValue(C.name, 'cName', 'correct name is assigned');