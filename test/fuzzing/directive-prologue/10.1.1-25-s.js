assert.throws(SyntaxError, function() {
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                get: function () {
                    "use strict";
                    eval("var public = 1;");
                    return 11;
                }
            });
            var temp = obj.accProperty === 11;
});