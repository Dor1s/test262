assert.throws(SyntaxError, function() {
            eval("try{};catch(){}");
});