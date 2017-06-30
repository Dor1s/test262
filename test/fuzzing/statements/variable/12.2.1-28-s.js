assert.throws(SyntaxError, function() {
    eval('function foo() { var a, arguments = 42;}');
});