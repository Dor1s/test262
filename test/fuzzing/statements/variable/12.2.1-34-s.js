assert.throws(SyntaxError, function() {
    eval('for (var eval in null) {};');
});