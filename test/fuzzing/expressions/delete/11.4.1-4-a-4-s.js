        var obj = {};
        Object.defineProperty(obj, "prop", {
            get: function () {
                return "abc"; 
            },
            configurable: true
        });
        delete obj.prop;
assert.sameValue(obj.hasOwnProperty("prop"), false, 'obj.hasOwnProperty("prop")');