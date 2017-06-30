assert.throws(SyntaxError, function() {
            eval("delete Boolean;");
});