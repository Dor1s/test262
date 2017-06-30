        var regObj = new RegExp();
assert.throws(SyntaxError, function() {
            eval("delete regObj;");
});