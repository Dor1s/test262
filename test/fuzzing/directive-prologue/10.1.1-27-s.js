        var obj = {};
        Object.defineProperty(obj, "accProperty", {
            get: function () {
                eval("public = 1;");
                "use strict";
                return 11;
            }
        });
assert.sameValue(obj.accProperty, 11, 'obj.accProperty');
assert.sameValue(public, 1, 'public');