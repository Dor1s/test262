assert.throws(SyntaxError, function() {
    eval('var arguments;');
});