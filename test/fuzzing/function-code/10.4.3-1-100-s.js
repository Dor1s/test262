var x = 3;
function f() {
    "use strict";
    x = this;
    return "a";
}
assert.sameValue("ab".replace("b", f), "aa", '"ab".replace("b", f)');
assert.sameValue(x, undefined, 'x');