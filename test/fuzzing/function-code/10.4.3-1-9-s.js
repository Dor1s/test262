var f = function () {
    return typeof this;
}
assert.sameValue(f(), "undefined", 'f()');