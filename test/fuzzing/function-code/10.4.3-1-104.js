  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
assert((5).x === 5, '(5).x === 5');