assert.throws(SyntaxError, function() {
            eval("function x,y,z(){}");
});