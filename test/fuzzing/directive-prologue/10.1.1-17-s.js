assert.throws(SyntaxError, function() {
        "use strict";
            var obj = {};
            Object.defineProperty(obj, "accProperty", {
                get: function () {
                    eval("public = 1;");
                    return 11;
                }
            });
            var temp = obj.accProperty === 11;
});