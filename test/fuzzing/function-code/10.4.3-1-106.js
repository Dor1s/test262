  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
assert.sameValue(typeof (5).x, "number", 'typeof (5).x');