var obj = new (function () {
    "use strict";
    return this;
});
assert.notSameValue(obj, this, 'obj');
assert.notSameValue((typeof obj), "undefined", '(typeof obj)');