        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return "abc"; 
            },
            configurable: false
        });
assert.throws(TypeError, function() {
            delete obj.prop;
});
assert.sameValue(obj.prop, "abc", 'obj.prop');