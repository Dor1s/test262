export default (function* gName() { return 88; });
import g from './eval-export-dflt-expr-gen-named.js';
assert.sameValue(g().next().value, 88, 'binding initialized');
assert.sameValue(g.name, 'gName', 'correct name is assigned');