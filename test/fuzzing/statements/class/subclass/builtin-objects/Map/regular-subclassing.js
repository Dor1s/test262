class M extends Map {}
var map = new M([{ 'foo': 'bar' }]);
assert.sameValue(map.size, 1);
map.set('bar', 'baz');
assert.sameValue(map.size, 2);