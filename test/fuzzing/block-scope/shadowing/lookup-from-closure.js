function f5(one) {
  var x = one + 1;
  let y = one + 2;
  const u = one + 4;
  {
    let z = one + 3;
    const v = one + 5;
    function f() {
      assert.sameValue(one, 1);
      assert.sameValue(x, 2);
      assert.sameValue(y, 3);
      assert.sameValue(z, 4);
      assert.sameValue(u, 5);
      assert.sameValue(v, 6);
    }
    f();
  }
}
f5(1);