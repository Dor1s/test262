assert.throws(SyntaxError, function() {
            eval("delete Function;");
});