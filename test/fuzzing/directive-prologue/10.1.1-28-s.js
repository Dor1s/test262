        var obj = {};
        var data;
        Object.defineProperty(obj, "accProperty", {
            set: function (value) {
                var _10_1_1_28_s = {a:1, a:2};
                data = value;
                "use strict";
            }
        });
        obj.accProperty = "overrideData";
assert.sameValue(data, "overrideData", 'data');