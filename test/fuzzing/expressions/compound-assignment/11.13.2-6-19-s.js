function testcase() {
        var err = null;
        var blah = arguments;
        try {
            eval("arguments >>>= 20;");
        } catch (e) {
            err = e;
        }
        assert(err instanceof SyntaxError, 'err instanceof SyntaxError');
        assert.sameValue(blah, arguments, 'blah');
}
testcase();