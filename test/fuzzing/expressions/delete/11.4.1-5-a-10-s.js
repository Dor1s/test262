        var arrObj = [1,2,3];
assert.throws(SyntaxError, function() {
            eval("delete arrObj;");
});