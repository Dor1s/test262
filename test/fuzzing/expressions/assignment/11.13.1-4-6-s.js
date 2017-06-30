assert.throws(TypeError, function() {
    Function.length = 42;
});