assert.throws(SyntaxError, function() {
            eval("var obj = {set _11_1_5_4_fun(arguments) {\"use strict\";}};");
});