var x = 3;
function f() {
    x = this;
    return "a";
}
assert.sameValue(function() {"use strict"; return "ab".replace("b", f);}(), "aa");
assert.sameValue(x, this, 'x');