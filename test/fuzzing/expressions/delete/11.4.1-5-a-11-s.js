        var strObj = new String("abc");
assert.throws(SyntaxError, function() {
            eval("delete strObj;");
});