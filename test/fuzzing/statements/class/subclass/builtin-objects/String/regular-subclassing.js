class S extends String {}
var s = new S(' test262 ');
assert.sameValue(s.trim(), 'test262');