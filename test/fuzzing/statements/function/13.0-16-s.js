assert.throws(SyntaxError, function() {
            eval("'use strict'; var _13_0_16_fun = function () {eval = 42;};");
            _13_0_16_fun();
});