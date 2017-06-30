assert.throws(SyntaxError, function() {
    eval('function foo() { arguments = 42; }; foo()');
});