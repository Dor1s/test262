assert.throws(SyntaxError, function() {
            eval("var _13_0_8_fun = function () {eval = 42;};");
            _13_0_8_fun();
});