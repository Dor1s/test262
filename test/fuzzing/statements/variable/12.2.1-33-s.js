assert.throws(SyntaxError, function() {
    eval('function foo() { var a, arguments, b;}');
});