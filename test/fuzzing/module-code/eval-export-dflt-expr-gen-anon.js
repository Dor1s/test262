export default (function* () { return 24601; });
import g from './eval-export-dflt-expr-gen-anon.js';
assert.sameValue(g().next().value, 24601, 'binding initialized');
assert.sameValue(g.name, 'default', 'correct name is assigned');