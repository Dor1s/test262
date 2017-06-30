var probe;
var func = function f() {
  probe = function() { return f; };
};
var f = 'outside';
func();
assert.sameValue(f, 'outside');
assert.sameValue(probe(), func);