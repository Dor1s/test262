        function _13_0_11_fun() {
            "use strict";
            function _13_0_11_inner() {
                eval("eval = 42;");
            }
            _13_0_11_inner();
        };
assert.throws(SyntaxError, function() {
            _13_0_11_fun();
});