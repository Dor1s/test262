  var a = 1;
  var o = {a : 2};
  try {
    with (o) {
      a = 3;
      throw 1;
      a = 4;
    }
  } catch (e) {
    // intentionally ignored
  }
assert.sameValue(a, 1, 'a');
assert.sameValue(o.a, 3, 'o.a');