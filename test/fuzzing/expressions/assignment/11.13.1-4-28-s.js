function testcase() {
        var err = null;
        var blah = eval;
        try {
            eval("var eval = 20;");
        } catch (e) {
            err = e;
        }
        assert(err instanceof SyntaxError, 'err instanceof SyntaxError');
        assert.sameValue(blah, eval, 'blah');
    }
testcase();