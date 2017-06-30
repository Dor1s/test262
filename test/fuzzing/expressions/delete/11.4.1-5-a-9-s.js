        function funObj () { };
assert.throws(SyntaxError, function() {
            eval("delete funObj;");
});