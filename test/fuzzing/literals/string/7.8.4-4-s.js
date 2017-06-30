assert.throws(SyntaxError, function() {
    eval('var x = "z\\7";');
});