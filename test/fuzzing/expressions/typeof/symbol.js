assert.sameValue(typeof Symbol('A'), 'symbol', "`typeof Symbol('A')` is `'symbol'`");
assert.sameValue(typeof Symbol(), 'symbol', "`typeof Symbol()` is `'symbol'`");
var symA = Symbol();
assert.sameValue(typeof symA, 'symbol', "`typeof symA` is `'symbol'`, after executing `var symA = Symbol();`");
var symB = Object(Symbol());
assert.sameValue(typeof symB, 'object', "`typeof symB` is `'object'`, after executing `var symB = Object(Symbol());`");