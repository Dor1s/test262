throw "Test262: This statement should not be evaluated.";
var x;
export { x as eval };
import { eval } from './early-import-eval.js';