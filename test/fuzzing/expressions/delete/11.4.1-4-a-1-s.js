        var obj = {};
        Object.defineProperty(obj, "prop", {
            value: "abc",
            configurable: false
        });
assert.throws(TypeError, function() {
            delete obj.prop;
});
assert.sameValue(obj.prop, "abc", 'obj.prop');