function f() {
    "use strict";
    return typeof this;
}
assert.sameValue(f(), "undefined", 'f()');