    var indirectEval = eval;
assert.throws(SyntaxError, function() {
	    indirectEval("'use strict'; var arguments;");
});