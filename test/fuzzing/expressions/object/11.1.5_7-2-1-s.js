assert.throws(SyntaxError, function() {
            eval("var data = \"data\";\
            var obj = {\
                set _11_1_5_7_2_1(value) {\
                    public = 42;\
                    data = value;\
                }\
            };\
            obj._11_1_5_7_2_1 = 1;");
});