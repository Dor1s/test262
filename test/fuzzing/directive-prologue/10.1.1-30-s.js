assert.throws(SyntaxError, function() {
            var funObj = new Function("a", "'use strict'; eval('public = 1;');");
            funObj();
});