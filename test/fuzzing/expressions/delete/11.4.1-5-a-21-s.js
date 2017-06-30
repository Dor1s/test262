assert.throws(SyntaxError, function() {
            eval("delete String;");
});