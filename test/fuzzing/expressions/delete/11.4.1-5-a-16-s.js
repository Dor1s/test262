        var errObj = new Error();
assert.throws(SyntaxError, function() {
            eval("delete errObj;");
});