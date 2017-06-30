assert.throws(SyntaxError, function() {
            eval("var argObj = (function (a, b) { delete arguments; }(1, 2));");
});