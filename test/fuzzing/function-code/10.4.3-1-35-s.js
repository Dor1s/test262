(function () {
    assert.sameValue((function () {
        return typeof this;
    })(), "undefined");
    assert.sameValue(typeof this, "undefined", 'typeof this');
})();