function fn(x) {
  let a = [];
  for (let p in x) {
    a.push(function () { return p; });
  }
  let k = 0;
  for (let q in x) {
    assert.sameValue(q, a[k]());
    ++k;
  }
}
fn({a : [0], b : 1, c : {v : 1}, get d() {}, set e(x) {}});