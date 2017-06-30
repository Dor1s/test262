assert.throws(SyntaxError, function() {
            eval("with ({}) { throw new Error();}");
});