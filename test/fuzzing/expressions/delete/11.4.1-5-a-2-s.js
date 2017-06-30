        function funObj(x) {
            eval("delete x;");
        }
assert.throws(SyntaxError, function() {
            funObj(1);
});