        var foo = Function("'use strict';");
assert.throws(TypeError, function() {
            foo.arguments = 41;
});