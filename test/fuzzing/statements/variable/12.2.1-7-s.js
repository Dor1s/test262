assert.throws(SyntaxError, function() {
    eval('var eval;');
});