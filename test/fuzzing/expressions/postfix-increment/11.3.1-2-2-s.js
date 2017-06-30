        var blah = eval;
assert.throws(SyntaxError, function() {
            eval("eval++;");
});
assert.sameValue(blah, eval, 'blah');