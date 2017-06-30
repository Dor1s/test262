assert.throws(SyntaxError, function() {
            eval("do{};while()");
});