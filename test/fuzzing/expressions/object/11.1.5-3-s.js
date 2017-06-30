assert.throws(SyntaxError, function() {
            eval("var obj = {set _11_1_5_3_fun(eval) { \"use strict\"; }};");
});