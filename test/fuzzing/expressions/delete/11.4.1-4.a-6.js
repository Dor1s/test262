  var o = new Object();
  o.x = 1;
  var d;
  with(o)
  {
    d = delete x;
  }
assert.sameValue(d, true, 'd');
assert.sameValue(o.x, undefined, 'o.x');