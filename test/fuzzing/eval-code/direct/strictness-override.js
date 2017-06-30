assert.throws(ReferenceError, function() {
  eval('"use strict"; unresolvable = null;');
});