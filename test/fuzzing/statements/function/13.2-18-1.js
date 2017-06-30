try {
    var getFunc = function () {
        return 100;
    };
    var data = "data";
    var setFunc = function (value) {
        data = value;
    };
    Object.defineProperty(Function.prototype, "prototype", {
        get: getFunc,
        set: setFunc,
        configurable: true
    });
    var fun = function () { };
    assert.notSameValue(fun.prototype, 100);
    assert.sameValue(fun.prototype.toString(), "[object Object]");
    verifyNotEnumerable(fun, "prototype");
    verifyWritable(fun, "prototype");
    verifyNotConfigurable(fun, "prototype");
    assert.sameValue(data, "data");
} finally {
    delete Function.prototype.prototype;
}