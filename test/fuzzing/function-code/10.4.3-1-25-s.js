var obj = new (function () {
    return this;
});
assert.notSameValue(obj, this, 'obj');
assert.notSameValue((typeof obj), "undefined", '(typeof obj)');