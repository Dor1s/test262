var __10_4_2_1_4 = "str";
function testcase() {
            var o = new Object();
            o.__10_4_2_1_4 = "str2";
            var _eval = eval;
            var __10_4_2_1_4 = "str1";
            with (o) {
                assert(_eval("\'str\' === __10_4_2_1_4"), 'indirect eval');
            }
    }
testcase();