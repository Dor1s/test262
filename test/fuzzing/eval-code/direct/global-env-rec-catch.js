var __10_4_2_1_3 = "str";
function testcase() {
            var __10_4_2_1_3 = "str1";
            try {
                throw "error";
            }
            catch (e) {
                var __10_4_2_1_3 = "str2";
                assert(eval("\'str2\' === __10_4_2_1_3"), 'direct eval');
            }
    }
testcase();