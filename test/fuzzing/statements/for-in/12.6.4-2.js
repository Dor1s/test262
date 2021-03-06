        var proto = {
            prop: "enumerableValue"
        };
        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();
        Object.defineProperty(child, "prop", {
            value: "nonEnumerableValue",
            enumerable: false
        });
        var accessedProp = false;
        for (var p in child) {
            if (p === "prop") {
                accessedProp = true;
            }
        }
assert.sameValue(accessedProp, false, 'accessedProp');