assert.throws(SyntaxError, function() {
            eval("var obj = {\
                get _11_1_5_6_2_1() {\
                   public = 42;\
                   return public;\
                }\
            };");
            var _11_1_5_6_2_1 = obj._11_1_5_6_2_1;
});