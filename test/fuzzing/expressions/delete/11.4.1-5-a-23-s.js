assert.throws(SyntaxError, function() {
            eval("delete Number;");
});