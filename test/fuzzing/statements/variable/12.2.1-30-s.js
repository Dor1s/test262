assert.throws(SyntaxError, function() {
    eval('function foo() { var a = 42, arguments;}');
});