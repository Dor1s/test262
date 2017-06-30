        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return 11;
            },
            set: undefined,
            enumerable: true,
            configurable: true
        });
assert.throws(TypeError, function() {
            obj.prop &= 20;
});
assert.sameValue(obj.prop, 11, 'obj.prop');