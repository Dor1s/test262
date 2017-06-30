assert.throws(SyntaxError, function() {
            eval("var prop = \\u2028;");
});