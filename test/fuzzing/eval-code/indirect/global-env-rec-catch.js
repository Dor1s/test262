var __10_4_2_1_3 = "str";
function testcase() {
            var _eval = eval;
            var __10_4_2_1_3 = "str1";
            try {
                throw "error";
            }
            catch (e) {
                var __10_4_2_1_3 = "str2";
                assert(_eval("\'str\' === __10_4_2_1_3"), 'indirect eval');
            }
    }
testcase();