        var obj = {};
        Object.preventExtensions(obj);
assert.throws(TypeError, function() {
            obj.len %= 10;
});