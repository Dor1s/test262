        var foo = Function("'use strict';");
assert.throws(TypeError, function() {
            var temp = foo.arguments;
});