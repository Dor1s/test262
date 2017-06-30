assert.throws(SyntaxError, function() {
    eval('(function () {arguments = 42;})()');
});