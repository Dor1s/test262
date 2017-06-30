assert.throws(SyntaxError, function() {
            eval("var regExp =  /[\u2028]/");
});