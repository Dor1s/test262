  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
assert.sameValue((5).x == 0, false, '(5).x == 0');
assert((5).x == 5, '(5).x == 5');