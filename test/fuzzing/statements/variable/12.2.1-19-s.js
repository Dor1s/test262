assert.throws(SyntaxError, function() {
    eval('arguments = 42;');
});