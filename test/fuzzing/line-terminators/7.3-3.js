assert.throws(SyntaxError, function() {
            eval("//Single Line Comments\u2028 var =;");
});