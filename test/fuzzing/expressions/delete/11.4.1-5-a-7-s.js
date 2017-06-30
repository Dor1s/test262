        var obj = new Object();
assert.throws(SyntaxError, function() {
            eval("delete obj;");
});