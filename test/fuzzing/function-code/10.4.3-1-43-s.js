(function () {
    "use strict";
    var f = function () {
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();