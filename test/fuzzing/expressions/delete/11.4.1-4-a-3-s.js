        var obj = {};
        Object.defineProperty(obj, "prop", {
            value: "abc",
            configurable: true
        });
        delete obj.prop;
assert.sameValue(obj.hasOwnProperty("prop"), false, 'obj.hasOwnProperty("prop")');