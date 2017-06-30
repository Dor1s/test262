        function funObj(x, y, z) {
            eval("delete y;");
        }
assert.throws(SyntaxError, function() {
            funObj(1);
});