        var _13_0_9_fun = function () {
            function _13_0_9_inner() { eval("eval = 42;"); }
            _13_0_9_inner();
        };
assert.throws(SyntaxError, function() {
            _13_0_9_fun();
});