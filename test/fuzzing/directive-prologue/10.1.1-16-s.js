function testcase() {
        "use strict";
        assert.throws(SyntaxError, function() {
                eval("var public = 1;");
        });
    }
testcase();