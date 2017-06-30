assert.throws(SyntaxError, function() {
    eval('for (var arguments in null) {};');
});