function f() {
    return this;
}
assert.notSameValue((new f()), this, '(new f())');
assert.notSameValue(typeof (new f()), "undefined", 'typeof (new f())');