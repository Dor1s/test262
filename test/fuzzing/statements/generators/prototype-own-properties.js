function* g() {}
var ownProperties = Object.getOwnPropertyNames(g.prototype);
assert.sameValue(ownProperties.length, 0);