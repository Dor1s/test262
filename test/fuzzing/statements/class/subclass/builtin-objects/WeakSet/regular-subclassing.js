class WS extends WeakSet {}
var set = new WS();
var obj = {};
assert.sameValue(set.has(obj), false);
set.add(obj);
assert.sameValue(set.has(obj), true);