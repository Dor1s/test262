var __10_4_2_1_5 = "str";
function testcase() {
            var __10_4_2_1_5 = "str1";
            var r = eval("\
                          var _eval = eval; \
                          var __10_4_2_1_5 = \'str2\'; \
                          _eval(\"\'str\' === __10_4_2_1_5 \") \
                        ");
            assert(r);
    }
testcase();