assert.throws(SyntaxError, function() {
            eval("var obj = {set _11_1_5_1_fun(eval) {}};");
});