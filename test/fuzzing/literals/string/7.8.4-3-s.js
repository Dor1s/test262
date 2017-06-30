assert.throws(SyntaxError, function() {
    eval('var x = "a\\4";');
});