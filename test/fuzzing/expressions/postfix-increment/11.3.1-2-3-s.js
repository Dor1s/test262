function testcase() {
        arguments[1] = 7;
        arguments[1]++;
        assert.sameValue(arguments[1], 8, 'arguments[1]');
    }
testcase();