assert.throws(SyntaxError, function() {
            eval("'use strict'; function _13_1_25_fun(param1, param2, param1) { }");
});