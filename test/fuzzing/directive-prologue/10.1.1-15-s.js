function testcase() {
        "use strict";
        function fun() {
            eval("var public = 1;");
        }
        assert.throws(SyntaxError, function() {
            fun();
        });
    }
testcase();