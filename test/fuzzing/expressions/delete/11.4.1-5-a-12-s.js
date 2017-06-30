        var boolObj = new Boolean(false);
assert.throws(SyntaxError, function() {
            eval("delete boolObj;");
});