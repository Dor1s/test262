var global = this;
var result;
(function() {
        var obj = {};
        obj.test = function () {
            this._12_14_15_foo = "test";
        };
        try {
            throw obj.test;
        } catch (e) {
            e();
            result = global._12_14_15_foo;
        }
})();
assert.sameValue(result, "test", 'result');