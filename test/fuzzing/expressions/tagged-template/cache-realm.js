var other = $262.createRealm().global;
var strings1, strings2;
strings1 = (function(strings) { return strings; })`1234`;
strings2 = other.eval('(function(strings) { return strings; })`1234`');
assert.notSameValue(strings1, strings2);