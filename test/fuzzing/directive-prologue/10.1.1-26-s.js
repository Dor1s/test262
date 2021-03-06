var data = "data";
assert.throws(SyntaxError, function() {
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                set: function (value) {
                    "use strict";
                    eval("var public = 1;");
                    data = value;
                }
            });
            obj.accProperty = "overrideData";
});
assert.sameValue(data, "data", 'data unchanged');