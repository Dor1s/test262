  var o;
  eval("o = {set foo(arg){}};");
  var desc = Object.getOwnPropertyDescriptor(o,"foo");
assert.sameValue(desc.get, undefined, 'desc.get');