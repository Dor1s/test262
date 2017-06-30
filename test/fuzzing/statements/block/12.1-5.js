assert.throws(SyntaxError, function() {
            eval("if{};else if{}");
});