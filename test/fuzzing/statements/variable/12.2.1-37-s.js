assert.throws(SyntaxError, function() {
    eval('for (var arguments = 42 in null) {};');
});