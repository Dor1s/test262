var global = this;
(function () {
    function f() {
        "use strict";
        return typeof this;
    }
    assert.sameValue(f(), "undefined", 'f()');
    assert.sameValue(this, global, 'this');
})();