assert.throws(SyntaxError, function() {
            eval("function _13_1_26_fun(param1, param2, param1) { 'use strict'; }");
});