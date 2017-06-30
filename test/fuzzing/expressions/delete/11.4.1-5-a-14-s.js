        var dateObj = new Date();
assert.throws(SyntaxError, function() {
            eval("delete dateObj;");
});