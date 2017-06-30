        var argObj = function () {
            return arguments;
        } ();
assert.throws(TypeError, function() {
            argObj.callee = {};
});