assert.throws(SyntaxError, function() {
    eval('function foo() { eval = 42; }; foo()');
});