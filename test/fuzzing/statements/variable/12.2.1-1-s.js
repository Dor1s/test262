assert.throws(SyntaxError, function() {
    eval('function foo() { var eval; }');
});