export default (function() { return 99; });
import f from './eval-export-dflt-expr-fn-anon.js';
assert.sameValue(f(), 99, 'binding initialized');
assert.sameValue(f.name, 'default', 'correct name is assigned');