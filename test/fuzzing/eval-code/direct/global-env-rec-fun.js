var __10_4_2_1_2 = "str";
function testcase() {
            var __10_4_2_1_2 = "str1";
            function foo() {
                var __10_4_2_1_2 = "str2";
                assert(eval("\'str2\' === __10_4_2_1_2"), 'direct eval');
            }
            foo();
    }
testcase();