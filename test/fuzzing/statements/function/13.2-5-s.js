        var foo = new Function("'use strict';");
assert.throws(TypeError, function() {
            var temp = foo.caller;
});