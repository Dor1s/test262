        var a = {x:0, get y() { return 0;}};
        delete a.x;
        Object.preventExtensions(a);
assert.throws(TypeError, function() {
            a.x = 1;
});