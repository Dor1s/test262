assert.throws(SyntaxError, function() {
    eval('function foo() { var eval, a = 42;}');
});