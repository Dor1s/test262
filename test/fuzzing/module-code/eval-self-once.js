import {} from './eval-self-once.js';
import './eval-self-once.js';
import * as ns1 from './eval-self-once.js';
import dflt1 from './eval-self-once.js';
export {} from './eval-self-once.js';
import dflt2, {} from './eval-self-once.js';
export * from './eval-self-once.js';
import dflt3, * as ns from './eval-self-once.js';
export default null;
var global = fnGlobalObject();
assert.sameValue(global.test262, undefined, 'global property initially unset');
global.test262 = 262;
assert.sameValue(global.test262, 262, 'global property was defined');