assert.sameValue((function () {
    return typeof this;
})(), "undefined");