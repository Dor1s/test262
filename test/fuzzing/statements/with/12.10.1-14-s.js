assert.throws(SyntaxError, function() {
            eval("var obj = { get(a) { with(a){} } }; ");
});