assert.throws(SyntaxError, function() {
            eval("delete Date;");
});