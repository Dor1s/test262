assert.throws(SyntaxError, function() {
    eval('var x = "\\463";');
});