        function fun() {
            "use strict";
                eval("var public = 1;");
        }
assert.throws(SyntaxError, function() {
    fun();
});