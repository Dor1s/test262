assert.throws(SyntaxError, function() {
    eval('(function () { var eval; })');
});