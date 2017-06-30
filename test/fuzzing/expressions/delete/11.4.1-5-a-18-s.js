assert.throws(SyntaxError, function() {
            eval("delete Object;");
});