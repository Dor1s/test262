assert.throws(SyntaxError, function() {
    eval('function foo() { var arguments = 42;}');
});