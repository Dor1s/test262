var { fn = function () {}, xFn = function x() {} } = {};
assert.sameValue(fn.name, 'fn');
assert.notSameValue(xFn.name, 'xFn');