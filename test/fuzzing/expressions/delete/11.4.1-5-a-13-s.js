        var numObj = new Number(0);
assert.throws(SyntaxError, function() {
            eval("delete numObj;");
});