assert.throws(SyntaxError, function() {
            eval("delete RegExp;");
});