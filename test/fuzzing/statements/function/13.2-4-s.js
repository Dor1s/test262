assert.throws(TypeError, function() {
            var foo = function () {
            }
            foo.arguments = 20;
});