var x = { x: true };
export default 'x' in x;
import f from './eval-export-dflt-expr-in.js';
assert.sameValue(f, true);