assert.sameValue(typeof (() => {}), "function");
assert.sameValue(Object.getPrototypeOf(() => {}), Function.prototype);
assert.sameValue("prototype" in (() => {}), false);