assert.throws(SyntaxError, function() {
            (function fun() {
                eval("arguments = 10");
            })(30);
});