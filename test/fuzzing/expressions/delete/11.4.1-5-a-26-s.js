assert.throws(SyntaxError, function() {
            eval("delete Error;");
});