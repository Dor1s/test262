assert.throws(SyntaxError, function() {
            eval("'use strict'; function _13_0_7_fun() {eval = 42;};");
            _13_0_7_fun();
});