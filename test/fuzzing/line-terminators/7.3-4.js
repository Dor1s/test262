assert.throws(SyntaxError, function() {
            eval("//Single Line Comments\u2029 var =;");
});