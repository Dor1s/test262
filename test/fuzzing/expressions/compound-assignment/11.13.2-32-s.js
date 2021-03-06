        var obj = {};
        Object.defineProperty(obj, "prop", {
            value: 10,
            writable: false,
            enumerable: true,
            configurable: true
        });
assert.throws(TypeError, function() {
            obj.prop ^= 20;
});
assert.sameValue(obj.prop, 10, 'obj.prop');