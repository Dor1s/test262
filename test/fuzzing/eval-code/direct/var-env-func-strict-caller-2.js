function testcase() {
        eval("function _10_4_2_1_2_fun(){}");
        assert.sameValue(typeof _10_4_2_1_2_fun, "undefined");
    }
testcase();