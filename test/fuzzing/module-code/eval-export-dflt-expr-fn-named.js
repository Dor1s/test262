export default (function fName() { return 7; });
import f from './eval-export-dflt-expr-fn-named.js';
assert.sameValue(f(), 7, 'binding initialized');
assert.sameValue(f.name, 'fName', 'correct name is assigned');