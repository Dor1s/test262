assert.throws(SyntaxError, function() {
            eval("'use strict'; function eval() { };")
});