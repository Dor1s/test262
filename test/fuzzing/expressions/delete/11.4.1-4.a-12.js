  var a = [1,2,3]
  a.x = 10;
  var d = delete a.length
assert.sameValue(d, false, 'd');
assert.sameValue(a.length, 3, 'a.length');