assert.throws(TypeError, function() {
            var foo = function () {
            }
            foo.caller = 20;
});