function testcase() {
        var blah = arguments;
        assert.throws(SyntaxError, function() {
            eval("arguments++;");
        });
        assert.sameValue(blah, arguments, 'blah');
    }
testcase();