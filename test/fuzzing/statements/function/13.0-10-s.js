        function _13_0_10_fun() {
            function _13_0_10_inner() {
                "use strict";
                eval("eval = 42;");
            }
            _13_0_10_inner();
        };
assert.throws(SyntaxError, function() {
            _13_0_10_fun();
});