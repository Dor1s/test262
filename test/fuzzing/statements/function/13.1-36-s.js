assert.throws(SyntaxError, function() {
            eval("function eval() { 'use strict'; };")
});