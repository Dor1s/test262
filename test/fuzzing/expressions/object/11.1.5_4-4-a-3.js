  var o = eval("({foo:0,foo:1});");
assert.sameValue(o.foo, 1, 'o.foo');