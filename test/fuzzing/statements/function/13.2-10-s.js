        var foo = Function("'use strict';");
assert.throws(TypeError, function() {
            foo.caller = 41;
});