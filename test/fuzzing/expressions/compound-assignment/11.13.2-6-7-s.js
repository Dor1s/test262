        var blah = eval;
assert.throws(SyntaxError, function() {
            eval("eval >>= 20;");
});
assert.sameValue(blah, eval, 'blah');