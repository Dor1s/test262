var __10_4_2_1_2 = "str";
function testcase() {
            var _eval = eval;
            var __10_4_2_1_2 = "str1";
            function foo() {
                var __10_4_2_1_2 = "str2";
                assert(_eval("\'str\' === __10_4_2_1_2"), 'indirect eval');
            }
            foo();
    }
testcase();