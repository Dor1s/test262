assert.throws(SyntaxError, function() {
  eval('import v from "./import.js";');
});