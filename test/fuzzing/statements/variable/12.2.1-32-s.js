assert.throws(SyntaxError, function() {
    eval('function foo() { var arguments, arguments = 42;}');
});