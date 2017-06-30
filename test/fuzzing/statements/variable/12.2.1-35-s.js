assert.throws(SyntaxError, function() {
    eval('for (var eval = 42 in null) {};');
});