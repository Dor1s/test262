assert.throws(SyntaxError, function() {
  (0,eval)('import v from "./import.js";');
});