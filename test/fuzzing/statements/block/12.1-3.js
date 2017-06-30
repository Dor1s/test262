assert.throws(SyntaxError, function() {
            eval("try{};finally{}");
});