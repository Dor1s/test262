var global = this;
(function () {
    assert.sameValue((function () {
        "use strict";
        return typeof this;
    })(), "undefined");
    assert.sameValue(this, global, 'this');
})();