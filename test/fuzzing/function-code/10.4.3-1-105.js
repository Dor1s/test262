  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
assert.sameValue((5).x === 5, false, '(5).x === 5');
assert.sameValue(typeof (5).x, "object", 'typeof (5).x');