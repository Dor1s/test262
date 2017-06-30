            Object.defineProperty(Object.prototype, "prop", {
                value: 100,
                writable: false,
                configurable: true
            });
            var obj = { prop: 12 };
assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(obj.prop, 12, 'obj.prop');