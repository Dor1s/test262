        var funObj = function () { };
assert.throws(SyntaxError, function() {
            eval("delete funObj;");
});